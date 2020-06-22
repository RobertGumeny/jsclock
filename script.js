const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const digital = document.getElementById('digital-time');

function setDate() {
  // get current date
  const now = new Date();

  // get seconds, minutes, hours...add a 0 in front if they are less than 10.
  const seconds = format(now.getSeconds());
  const minutes = format(now.getMinutes());
  const hours = format(now.getHours());

  // convert units of time into degrees to align different clock hands
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 60) * 360) + 90;

  // move clock hands when unit changes
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // display time digitally at top of page
  digital.innerText = `${hours}:${minutes}:${seconds}`;
}


// take in a unit, check to see if it is less than 10. If it is, add a 0 in front.
function format(unit) {
  if (unit < 10) {
    unit = `0${unit}`;
  }
  return unit;
}

// update clock every second
setInterval(setDate, 1000)