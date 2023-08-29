// type module imports the by es6 but package.json dosent undestand 
// so we need to typein dependencies type module package.json
import express from "express";
import cors from 'cors'
import Connected from "./database/db.js";
import Routes from "./routes/route.js"
import bodyParser from 'body-parser';





const app = express();


const corsOptions = {
    // origin : "https://mern-todolist-2tro.onrender.com"
    origin : "https://mern-todolist-deploy.onrender.com"
}

// making connection between front end and backend with different port numbers
app.use(express.json())
app.use(cors(corsOptions));

// this needs to be before Routes because it will parse and validate the requested data
// bodyparser or the json parser is used becaue the routes cannot handle the body request  this will handle that

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

// when your route is just 
app.use('https://mern-todolist-deploy.onrender.com/' , Routes)

// there will be routing here for the initial state of the action to be get


const PORT = 8000; 
 
// imorting from the db file for making connection form our local server to the mogodb backend
Connected();


app.listen( PORT , ()=> {console.log(`server is Running on Port ${PORT}`);});
 