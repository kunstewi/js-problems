// Rewrite the previous exercise using Promises. (Implement a function that makes multiple API calls and and processes the data using callbacks.)

function fetchDataFromAPIs(apiUrls){
    const fetchPromises = apiUrls.map(url => 
        fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP Error: ${response.status}`);
            } return response.json();
        })
    );

    return Promise.all(fetchPromises);
}

const apiUrls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
];

fetchDataFromAPIs(apiUrls)
.then(results => {
    console.log('Fetched Data:', results);
})
.catch(error => {
    console.error('Error fetching data:', error.message);
});