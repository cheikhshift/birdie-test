import { MySqlConnection } from 'mysqlconnector'
import { Event } from './types'

// BirdieDatabase will abstract connecting
// to the mysql database. It will 
// simplify the process of switching/adding
// databases to the current stack
export class BirdieDatabase {

	private conn : MySqlConnection;
	private db : string = "";

	constructor(){
		this.conn = {} as MySqlConnection
	}

	public async connect(
		host : string,
		port : number,
		username : string,
		password : string,
		database : string
	){
		const connection = new MySqlConnection(`${host}:${port}`, username, password);  
     	
    	await connection.connectAsync()

    	this.conn = connection
    	this.db = database
	}

	public isConnected() : boolean {
		return this.db != ""
	}

	/**
	 * Retrieve data from MySQL db
	 * @param {string} q - string with MySQL query
	 * @returns {any[]} returns array of any, as a result of db query
	 */
	public async query(q : string){

		const result : any[] = await this.conn.queryAsync(q)
		return result
	}


	public async close(){
		await this.conn.closeAsync()
	}
}
