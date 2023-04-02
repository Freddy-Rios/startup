const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

//infromation in connecting to database made in z.profile
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

//error in connection to DB 
if(!userName){
    throw Error('Database not configured. Set environment variables');
}

//url for mongodb client connection
const url = `mongodb+srv://${userName}:${password}@${hostname}`;

//client connection 
const client = new MongoClient(url);
//set collections
const userCollection = client.db('startup').collection('user');
//TODO: ADD THE MOVIECATALOG COLLECTION

function getUser(userName) {
    return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
    //encrypts pass word in database for security
    const passwordHash = await bcrypt.hash(password, 10);

    //full user information to be inserted to the DB
    const user = {
        userName: userName,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    
    return user;
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    //TODO: ADD THE FUNCTIONS LATER FOR THE MOVIE CATALOG
  };
  