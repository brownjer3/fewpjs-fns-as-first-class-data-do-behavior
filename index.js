/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
//   If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".
  let hour = parseInt(time.split(":")[0])
  if (hour < 12) {
    return "Good Morning"
  } else if (hour < 17) {
    return "Good Afternoon"
  } else if (hour < 24) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.querySelector("#greeting").innerText = message
}