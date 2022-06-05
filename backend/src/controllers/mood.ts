import * as express from "express";
import { BirdieDatabase } from '../db/mysql'

export const moodController = express.Router();


moodController.get('/events', async (_, res) => {
  	const db = res.locals.db as BirdieDatabase

  	var result = await db.query('SELECT * FROM events')

  	res
  	.status(200)
  	.json(result)
}); 
