// Function to show the stand-up reminder
function showStandUpReminder() {
    alert("It's time to stand up and stretch!");
    // Update the timestamp in localStorage to current time
    localStorage.setItem('standUpReminder', Date.now());
}

// Function to check if the reminder should be shown
function checkStandUpReminder() {
    // Retrieve the last reminder timestamp from localStorage
    let lastReminder = localStorage.getItem('standUpReminder');
    if (lastReminder === null) {
        // If no reminder timestamp exists (first visit), set one
        localStorage.setItem('standUpReminder', Date.now());
    } else {
        // Calculate the time difference between now and the last reminder
        let timeDiff = Date.now() - parseInt(lastReminder, 10);
        // Convert milliseconds to minutes
        let minutesPassed = Math.floor(timeDiff / (1000 * 60));
        
        // Check if 40 minutes have passed since the last reminder
        if (minutesPassed <= 1) {
            showStandUpReminder();
        }
    }
}

// Check the reminder every time the page loads
window.addEventListener('load', function() {
    checkStandUpReminder();
});

// Check the reminder every time the user navigates within the website
window.addEventListener('beforeunload', function() {
    checkStandUpReminder();
});
