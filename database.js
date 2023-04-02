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