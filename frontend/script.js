// Get the HTML element that displays the visitor count
const visitorCount = document.getElementById("visitor-count");

// Retrieve the saved count from the browser's local storage
let count = localStorage.getItem("count");

// If no count has been saved yet, start at 0
if (count === null) {
    count = 0;
}

// Function to update the visitor counter
function updateVisitorCount() {
    // Convert the stored value to a number and increment it by 1
    count = Number(count) + 1;

    // Save the updated count back to local storage
    localStorage.setItem("count", count);

    // Display the updated count on the webpage
    visitorCount.textContent = count;
}

// Run the function
updateVisitorCount();

