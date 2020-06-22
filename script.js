const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const digital = document.getElementById('digital-time');

function setDate() {
  const now = new Date();
  const seconds = format(now.getSeconds());
  const minutes = format(now.getMinutes());
  const hours = format(now.getHours());
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  digital.innerText = `${hours}:${minutes}:${seconds}`;
}

function format(unit) {
  if (unit < 10) {
    unit = `0${unit}`;
  }
  return unit;
}

setInterval(setDate, 1000)