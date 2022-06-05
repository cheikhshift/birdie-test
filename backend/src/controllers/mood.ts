import * as express from "express";
import { BirdieDatabase } from '../db/mysql'

export const moodController = express.Router();


moodController.get('/events', async (req, res) => {
  	const db = res.locals.db as BirdieDatabase
  	const page = parseInt(
  		req.query.page as string
  	)

  	const limit = parseInt(
  		req.query.limit as string
  	)

  	if(!req.query.page || 
  		!req.query.limit ||
  		!Number.isInteger(page) ||
  		!Number.isInteger(limit)){
  		const missingField =  Number.isInteger(page) ? "limit" : "page"
  	    const error = "malformed query data. missing query parameter : " + missingField  
  		res.status(400).json({ error })
  		return
  	}

  	const offset = page * limit
  	var result = await db.query(`SELECT * FROM events LIMIT ${offset}, ${limit}`)

  	result =  result.map( row => {
  		if(row.payload){
  			row.payload = JSON.parse(row.payload)
  		}

  		return row
  	})

  	res
  	.status(200)
  	.json(result)
}); 
