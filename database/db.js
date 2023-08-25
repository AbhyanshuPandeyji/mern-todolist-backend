import mongoose from "mongoose";
import dotenv from 'dotenv';

// initializing dotenv - use config funtion to initialize dotenv
dotenv.config();


// to take anything from dotenv file - you need to use process.env.(DB_USERNAME - what parameters you putted in)
// rember these are variables you need to put it into a string so for that use back tics in your url
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 




const Connected = () => {

    // the value of the url will come from the mogodb cloud database
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-list.kbaemfs.mongodb.net/?retryWrites=true&w=majority`


    // to say the url and second arg for the setting new parsed url - URLNEWPARSEIS BEEN DEPRECATED
    mongoose.connect(MONGODB_URI);


    // if successful - connected has meaning for the mongodb
    mongoose.connection.on('connected', ()=>{
        console.log("Database connected Successfully");
    })

    // if desconnected due to some issue - disconnected has meaning for the mongodb
    mongoose.connection.on('disconnected', ()=>{
        console.log("Database disconnected ");
    })


    // if if cannot connect due to error - error has meaning for the mongodb
    mongoose.connection.on('error', ()=>{
        console.log("Error while connecting with the database ", error.message);
    })

}


export default Connected;