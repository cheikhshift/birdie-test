import * as express from "express";
import {pingController} from "./controllers/ping";
import {moodController} from './controllers/mood'
import { BirdieDatabase } from './db/mysql';


let db = new BirdieDatabase()
const creds = {
	host : process.env.MYSQL_HOST || "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
	port : process.env.MYSQL_PORT || "3306",
	user : process.env.MYSQL_USERNAME || "test-read",
	password : process.env.MYSQL_PASSWORD || "xnxPp6QfZbCYkY8",
	database : process.env.MYSQL_DATABASE || "birdietest"
}


const app = express();

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
