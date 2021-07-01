let hands = ["rock", "paper", "scissor"];
let playerValue;
let computerValue;
let gameLog = [];
let gameResult;
let ans;
let playerChose = document.getElementById("player-chose");
let decision = document.getElementById("result");
let computerChose = document.getElementById("computer-chose");
let gameLg = document.getElementById("gamelog");

function showDecision() {
  if (gameResult === true) {
    decision.innerHTML = "<h1>You Win</h1>";
    ans = "Win";
  } else if (gameResult === false) {
    decision.innerHTML = "<h1> You Loose</h1>";
    ans = "Loose";
  } else if (gameResult === undefined) {
    decision.innerHTML = "<h1>Draw</h1>";
    ans = "Draw";
  }
}

function showPlayerChoice() {
  if (playerValue === hands[0]) {
    playerChose.innerHTML = '<img src="images/rock.jpeg" alt="rock">';
  } else if (playerValue === hands[1]) {
    playerChose.innerHTML = '<img src="images/paper.jpeg" alt="rock">';
  } else if (playerValue === hands[2]) {
    playerChose.innerHTML = '<img src="images/scissor.png" alt="rock">';
  }
}

function showComputerChoice() {
  if (computerValue === hands[0]) {
    computerChose.innerHTML = '<img src="images/rock.jpeg" alt="rock">';
  } else if (computerValue === hands[1]) {
    computerChose.innerHTML = '<img src="images/paper.jpeg" alt="rock">';
  } else if (computerValue === hands[2]) {
    computerChose.innerHTML = '<img src="images/scissor.png" alt="rock">';
  }
}

function createLog() {
  let logEntry =
    "You Chose " +
    playerValue +
    " and Computer chose " +
    computerValue +
    " And You got a" +
    ans;
  gameLog.push(logEntry);
  for (let i = 0; i < gameLog.length; i++) {
    gameLg.textContent += gameLog[i] + "\n";
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
  showPlayerChoice();
  showComputerChoice();
  createLog();
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
