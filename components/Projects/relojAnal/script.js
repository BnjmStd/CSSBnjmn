const $clock = document.querySelector(".clock");
const $hourHand = document.querySelector(".hour");
const $minuteHand = document.querySelector(".minute");
const $secondHand = document.querySelector(".second");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  // angles
  const secondDeg = (seconds / 60) * 360;
  const minutesDeg = ((minutes + seconds / 60) / 60) * 360;
  const hoursDeg = ((hours + minutes / 60) / 12) * 360;

  // apply
  $secondHand.style.transform = `rotate(${secondDeg}deg)`;
  $minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  $hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// init
updateClock();
setInterval(updateClock, 1000);

// numbers
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  number.className = "number";
  number.style.setProperty("--rotation", `${i * 30}deg`);
  number.innerHTML = `<span>${i}</span>`;
  $clock.appendChild(number);
}
