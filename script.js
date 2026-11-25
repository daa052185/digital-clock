// Function to update the clock

function updateClock() {

  const now = new Date();

  // Get the current time

  const time = now.toLocaleTimeString("en-US");

  // Get the current date

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Display the time and date

  document.getElementById("time").textContent = time;

  document.getElementById("date").textContent = date;

}

// Run the clock immediately

updateClock();

// Update the clock every second

setInterval(updateClock, 1000);
