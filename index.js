//setting up express 
const express = require('express');
const app = express();

//hosting server on port 4000 
const port = process.argv.length > 2 ? process.argv[2] : 4000;

//JSON body parsing 
app.use(express.json());

//serve up application static content -> should be the public folder with front end content
app.use(express.static('public'));

    //router for service endpoints 
    // var apiRouter = express.Router();
    // app.use('/api', apiRouter);
    //add api if needed example :
        // // GetScores
        // apiRouter.get('/scores', async (_req, res) => {
        //     const scores = await DB.getHighScores();
        //     res.send(scores);
        // });
        
        // // SubmitScore
        // apiRouter.post('/score', async (req, res) => {
        //     DB.addScore(req.body);
        //     const scores = await DB.getHighScores();
        //     res.send(scores);
        // });

//return the application's default page if path is unknown 
app.use((_req,res)=> {
    res.sendFile('index.html', {root: 'public'});
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});