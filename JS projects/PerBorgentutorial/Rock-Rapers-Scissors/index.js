let hands = ["rock", "paper", "scissor"];
let playerValue;
let computerValue;
let gameLog = [];
let gameResult;
let playerChose = document.getElementById("player-chose");
let decision = document.getElementById("result");
let computerChose = document.getElementById("computer-chose");

function showDecision() {
  if (gameResult === true) {
    decision.innerHTML = "<h1>You Win</h1>";
  } else if (gameResult === false) {
    decision.innerHTML = "<h1> You Loose</h1>";
  } else if (gameResult === undefined) {
    decision.innerHTML = "<h1>Draw</h1>";
  }
}

function rock() {
  playerValue = hands[0];
  computerValue = rps();
  console.log(playerValue + "  " + computerValue);
  decideWinner();
}

function paper() {
  playerValue = hands[1];
  computerValue = rps();
  console.log(playerValue + "  " + computerValue);
  decideWinner();
}

function scissors() {
  playerValue = hands[2];
  computerValue = rps();
  console.log(playerValue + "  " + computerValue);
  decideWinner();
}

function decideWinner() {
  if (playerValue === computerValue) {
    console.log("Draw");
    gameResult = undefined;
  } else if (
    (playerValue === "rock" && computerValue === "scissor") ||
    (playerValue === "paper" && computerValue === "rock") ||
    (playerValue === "scissor" && computerValue === "paper")
  ) {
    console.log("you win");
    gameResult = true;
  } else {
    console.log("you loose");
    gameResult = false;
  }
  showDecision();
}

function rps() {
  let rndmnum = Math.floor(Math.random() * 3);
  console.log("random number created " + rndmnum);
  if (rndmnum === 0) {
    return hands[rndmnum];
  } else if (rndmnum === 1) {
    return hands[rndmnum];
  } else if (rndmnum === 2) {
    return hands[rndmnum];
  }
}
