"use strict";
const data = {
  body: document.querySelector("body"),
  again: document.querySelector(".again"),
  answer: document.querySelector(".answer"),
  input: document.querySelector(".number"),
  check: document.querySelector(".check"),
  message: document.querySelector(".message"),
  score: document.querySelector(".score"),
  highScore: document.querySelector(".high-score"),
};
const val = 20;
let math = Math.trunc(Math.random() * val + 1);
// data.answer.textContent = math;
// Utilities
document.querySelector(".again + p").textContent = `(Between 1 and ${val})`;
let score = val;
let highScore = 0;

function message(text) {
  return (data.message.textContent = text);
}
function activehandler() {
  const input = data.input.value;
  if (!input) {
    message("💥 Invalid Number");
  } else if (!(math == input)) {
    input > math ? message(" 📈 Too High! ") : message(" 📉 Too Low!");
    score--;
    if (score <= 0) {
      score = 0;
      data["body"].style.backgroundColor = "purple";
      message("...GAME OVER:(...");
      data.check.style.visibility = "hidden";
      document.querySelector(".title-cont").textContent = "YOU LOOSE PLAYER!";
    }
    data.score.textContent = score;
  } else if (math == input) {
    data["body"].style.backgroundColor = "dodgerblue";
    data.answer.textContent = math;
    score > highScore ? (highScore = score) : highScore;
    message("YOU WON ");
    document.querySelector(".title-cont").textContent = "YOU WON PLAYER!";
    data.check.style.visibility = "hidden";
    data.highScore.textContent = highScore;
    data.again.style.animationName = "scale";
  }
}

function reset() {
  data.again.style.animationName = "";
  score = val;
  data.score.textContent = score;
  math = Math.trunc(Math.random() * val + 1);
  message("Guess The Number!");
  data["body"].style.backgroundColor = "#222";
  data.check.style.visibility = "visible";
  data.answer.textContent = "?";
  data.input.value = "";
  document.querySelector(".title-cont").textContent = "Guess The Number!";
}

data.check.addEventListener("click", activehandler);
data.again.addEventListener("click", reset);
