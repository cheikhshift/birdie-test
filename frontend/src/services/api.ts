export const baseURL = isDev() ? "http://localhost:8000" : "<public api url>"

export function isDev(){
	return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
}


export async function getEvents(page : number, limit : number){
	
	const response = await fetch(
      `${baseURL}/events?page=${page}&limit=${limit}` 
    )

	let actualData = await response.json();

    if (!response.ok) {
        
        throw new Error(
        	actualData
        );
    }

    

    return actualData.map( (row: any ) => {
        row.event_type = row.event_type.split("_").join(" ")
        if(row.payload.mood){
            console.log(row)
            row.mood = row.payload.mood
        }
        return row
    })
}