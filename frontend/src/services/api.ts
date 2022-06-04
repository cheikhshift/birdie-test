
export const baseURL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "<public api url>"

export async function getEvents(){
	
	const response = await fetch(
      `${baseURL}/events` 
    )

    if (!response.ok) {
        throw new Error(
          `HTTP error: The status is ${response.status}`
        );
    }

    let actualData = await response.json();

    return actualData
}