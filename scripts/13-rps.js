const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let auto = false;

const moves = ["rock", "paper", "scissors"];

const qrock = document.querySelector(".js-rock");
qrock.addEventListener("click", () => {
  playGame("rock");
});

const qpaper = document.querySelector(".js-paper");
qpaper.addEventListener("click", () => {
  playGame("paper");
});

const qscissors = document.querySelector(".js-scissors");
qscissors.addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});

document.querySelector(
  ".js-score"
).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function updateScore(result) {
  if (result === "win") {
    score.wins += 1;
  } else if (result === "loss") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }
  console.log(score);
}

function pickComputermove() {
  randfloat = Math.random();

  let compchoice = "";
  let compfile;

  if (randfloat < 1 / 3) {
    compchoice = "rock";
    compfile = "images/Rock Emoji.png";
  } else if (randfloat < 2 / 3) {
    compchoice = "paper";
    compfile = "images/Rock Paper Emoji.png";
  } else {
    compchoice = "scissors";
    compfile = "images/Scissors emoji.png";
  }
  return [compchoice, compfile];
}

function playGame(playerMove) {
  let [compchoice, compfile] = pickComputermove();
  let moveIndex = [];
  let humfile;

  if (playerMove === "rock") {
    moveIndex = ["tie", "loss", "win"];
    humfile = "images/Rock Emoji.png";
  } else if (playerMove === "paper") {
    moveIndex = ["win", "tie", "loss"];
    humfile = "images/Rock Paper Emoji.png";
  } else if (playerMove === "scissors") {
    moveIndex = ["loss", "win", "tie"];
    humfile = "images/Scissors emoji.png";
  }

  let result;

  if (compchoice === "rock") {
    result = moveIndex[0];
  } else if (compchoice === "paper") {
    result = moveIndex[1];
  } else if (compchoice === "scissors") {
    result = moveIndex[2];
  }
  updateScore(result);

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-outcome").innerHTML = `You ${result}`;
  document.querySelector(
    ".js-positions"
  ).innerHTML = `You <img src="${humfile}" alt="" class='vs-img'> 
    - <img src="${compfile}" alt="" class='vs-img'> Computer`;
  console.log(compfile);
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
let IntervalID;

const aPlay = document.querySelector(".js-aplay");
aPlay.addEventListener("click", () => {
  console.log("test");
  autoplay;
});

function autoplay() {
  if (!auto) {
    auto = true;
    IntervalID = setInterval(() => {
      let [pick, compfile] = pickComputermove();
      console.log(pick);
      playGame(pick);
    }, 1000);
  } else {
    clearInterval(IntervalID);
    auto = false;
  }
}

function humanMove() {
  let [pick, compfile] = pickComputermove();
  console.log(pick);
  playGame(pick);
}

const reset = document.querySelector(".js-reset");
reset.addEventListener("click", () => {
  resetScore();
});

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
