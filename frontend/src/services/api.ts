export const baseURL = isDev() ? "http://localhost:8000" : "https://birdie-demo.herokuapp.com"

export function isDev(){
	return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
}

export async function getEventCount(){
    
    const response = await fetch(
      `${baseURL}/count_events` 
    )

    let actualData = await response.json();

    if (!response.ok) {     
        throw new Error(
            actualData
        );
    }
    

    return actualData.result
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
            row.mood = row.payload.mood
        }
        return row
    })
}