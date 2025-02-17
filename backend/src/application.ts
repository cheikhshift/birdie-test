import * as express from "express";
import {pingController} from "./controllers/ping";
import {moodController} from './controllers/mood'

import { BirdieDatabase } from './db/mysql';


let db = new BirdieDatabase()
const creds = {
	host : process.env.MYSQL_HOST || "",
	port : process.env.MYSQL_PORT || "",
	user : process.env.MYSQL_USERNAME || "",
	password : process.env.MYSQL_PASSWORD || "",
	database : process.env.MYSQL_DATABASE || ""
}

process.once('SIGTERM', db.close);
process.once('SIGINT', db.close);


const app = express();

app.use((_, res, next) => {

	res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    
    next()
})

app.use(pingController);

// The following code will inject 
// the database connector
// as a result variable
app.use(async (_, res, next) => {
   	
	
	try {
		if(!db.isConnected()){
			await db.connect(
				creds.host,
				creds.port,
				creds.user,
				creds.password,
				creds.database
			)
		}

		res.locals.db = db
   		next();
	} catch(e){
		res.status(500).send(e)
	}
	

   
})


app.use(moodController)

export default app;
