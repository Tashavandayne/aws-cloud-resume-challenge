// Get the HTML element that displays the visitor count
const visitorCount = document.getElementById("visitor-count");

// Function to retrieve and display the visitor count from AWS
async function updateVisitorCount() {
    // Send a request to API Gateway and wait for the response
    const response = await fetch(
        "https://6czmmz1qo5.execute-api.us-east-2.amazonaws.com/count"
    );

    // Convert the JSON response into a JavaScript object
    const data = await response.json();

    // Display the updated visitor count on the webpage
    visitorCount.textContent = data.visits;
}

// Run the function
updateVisitorCount();