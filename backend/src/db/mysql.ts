import { createPool, Pool} from 'mysql';


// BirdieDatabase will abstract connecting
// to the mysql database. It will 
// simplify the process of switching/adding
// databases to the current stack
export class BirdieDatabase {

	private pool : Pool;
	private db : string = "";

	constructor(){
		this.pool = {} as Pool
	}

	public async connect(
		host : string,
		port : string,
		username : string,
		password : string,
		database : string
	){	
		this.pool = createPool({
	      connectionLimit: 20,
	      host: host,
	      user: username,
	      password: password,
	      database: database,
	      port : parseInt(port)
	    });
		

    	this.db = database
	}

	public isConnected() : boolean {
		return this.db != ""
	}

	/**
	 * Retrieve data from MySQL db
	 * @param {string} q - string with MySQL query
	 * @param {string[] | Object} params - provide the parameterized values used in the query
	 * @returns {any[]}  any[] with result of db query
	 */
	public query(q : string, params : string[] | Object = []) : Promise<any[]>{

		return new Promise<any[]>((resolve, reject) => {
	      this.pool.query(q, params, (error : any, results : any[]) => {
	        if (error) reject(error);
	        else resolve(results);
	      });
	    });
		
	}

	close(){
		return new Promise((resolve, reject) => {
			if(!this.pool?.end) return resolve(true)
			this.pool.end(function (err) {
            if (err) return reject(err);
            return resolve(true)
        	})
		})
	}

}
