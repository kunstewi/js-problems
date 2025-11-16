// Implement an async function to fetch data from an API and handle errors using try/catch.

async function fetchData(apiUrl){
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    }
    catch(error){
        console.error('Error fetching data:', error.message);
        return null;
    }
}

// Usage
const apiUrl = 'https://api.example.com/data';
fetchData(apiUrl);