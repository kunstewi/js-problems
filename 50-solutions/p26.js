// Implement a function that makes multiple API calls and and processes the data using callbacks.

function fetchDataFromAPIs(apiUrls, callback){
    const results = [];
    let completedRequests = 0;

    apiUrls.forEach((url, index) => {
        fetch(url)
            .then(response => {
                if (!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                results[index] = data; // Store the result
                completedRequests++;

                // If all requests are completed, invoke the callback with the result
                if (completedRequests === apiUrls.length){
                    callback(null, results);
                }
            })
            .catch(error => {
                // Pass the errors to the callback
                callback(error, null);
            })
    })
}

// Usage

const apiUrls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
];

fetchDataFromAPIs(apiUrls, (error, results) => {
    if (error){
        console.error('Error fetching data:', error.message);
    } else {
        console.log('Fetched Data:', results);
    }
})