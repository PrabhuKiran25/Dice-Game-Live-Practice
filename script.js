// Getting Elements from HTML

const dice = document.getElementById("dice");
const playerMove = document.getElementById("player-move");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const player1Button = document.getElementById("player1-button");
const player2Button = document.getElementById("player2-button");

// Start Function

const handleStart = () => {
  const playerStart = Math.floor(Math.random() * 2 + 1);
  //console.log(playerStart);
  updateMoves(playerStart === 1 ? "Player-1" : "Player-2");
};

// Update Moves Function

const updateMoves = (player) => {
  // Update the player move value
  playerMove.innerText = `${player} To Play`;

  // Disabling the button based on the player
  if (player === "Player-1") {
    player1Button.disabled = false;
    player2Button.disabled = true;
  } else {
    player1Button.disabled = true;
    player2Button.disabled = false;
  }
};

// Dice Roll Logic

// Update Score Logic

// Winning Condition

// Resetting the game
