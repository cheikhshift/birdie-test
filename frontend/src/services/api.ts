export const baseURL = isDev() ? "http://localhost:8000" : "<public api url>"

export function isDev(){
	return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
}


export async function getEvents(){
	
	const response = await fetch(
      `${baseURL}/events` 
    )

	let actualData = await response.json();

    if (!response.ok) {
    
        throw new Error(
        	actualData
        );
    }

    

    return actualData
}