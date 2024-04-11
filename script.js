let randomNumber = Math.floor(Math.random() * 100);
let input = document.querySelector("input");
let button = document.querySelector(".submit-btn");
let result = document.querySelector(".result");
let restartBtn = document.querySelector(".start-game");
let all = document.querySelector(".all-guesses");
let fakeArr = [];
let guessCount = document.querySelector(".guessCount");
let body = document.querySelector("body");



//guessBtnHandler
button.addEventListener("click", (e) => {
  e.preventDefault();
  let userGuess = input.value;
  fakeArr.push(userGuess);
  let numbers = fakeArr.toString().split();

  if (userGuess < randomNumber) {
    result.textContent = `Too low!`;
    all.textContent = `${numbers}`;
    body.style.backgroundColor = `#ffff4c`;
  } else if (userGuess > randomNumber) {
    result.textContent = `Too high!`;
    all.textContent = `${numbers}`;
    body.style.backgroundColor = `#FF0800`;
  } else {
    result.textContent = `congrats`;
    restartBtn.disabled = false;
    button.disabled = true;
    all.textContent = `🥳`;
    const ll = fakeArr.length;
    guessCount.textContent = `No of atempts:${ll}`;
    body.style.backgroundColor = `green`;
  }

  input.value = ``;
});




//restartBtnHandler
restartBtn.addEventListener("click", () => {
  restartBtn.disabled = true;
  button.disabled = false;
  result.textContent = ``;
  all.textContent = ``;
  guessCount.textContent = ``;
  body.style.backgroundColor = `purple`;

  randomNumber = Math.floor(Math.random() * 100);
});




