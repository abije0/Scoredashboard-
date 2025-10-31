// Animate score count-up
const score = document.getElementById("score");
let value = 0, target = 76;
const counter = setInterval(() => {
  value++;
  score.textContent = value;
  if (value >= target) clearInterval(counter);
}, 20);