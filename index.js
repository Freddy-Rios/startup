//setting up packages 
const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
const DB = require('./database');

const authCookieName = 'token';

//hosting server on port 4000 
const port = process.argv.length > 2 ? process.argv[2] : 4000;

//JSON body parsing 
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

//serve up application static content -> should be the public folder with front end content
app.use(express.static('public'));

//Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//createAuth token for new user // relates to creating new account
apiRouter.post('/auth/create', async (req, res) =>{
    // look at DB to see if user exists 
    if (await DB.getUser(req.body.userName)){
        //if user exitst then error is sent
        res.status(409).send({ msg: 'Existing user' });
    } else {
        //if user does not exist then new user created
        const user = await DB.createUser(req.body.userName, req.body.password);
        //set cookies
        setAuthCookie(res, user.token);
        res.send({ id: user._id,})
    }
});

// getAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.userName);
    if (user) {
        //encrytiopn?
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id});
            return;
        }
    }
    res.status(401).send({msg: 'Unauthorized'});
});

//deleteAuth token if stored in cookies for security
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

//Get user information
apiRouter.get('/user/:userName',async (req, res) => {
    const user = await DB.getUser(req.params.userName);
    if (user) {
        const token = req?.cookies.token;
        res.send({ userName: user.userName, authenticated: token === user.token });
        return;
    }
    res.status(404).send({ msg: 'Unknown' })
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res) => {
    authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});
//TODO: GET THE MOVIE CATALOG HERE FROM THE DB USING THE secureApiRouter



//return the application's default page if path is unknown 
app.use((_req,res)=> {
    res.sendFile('index.html', {root: 'public'});
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
