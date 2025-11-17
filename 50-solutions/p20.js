// Implement a try catch block to handle an error that occurs during API data fetching.

async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    // Handle the error
    return null;
  }
}

fetchData("https://api.example.com/data");
