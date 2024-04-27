'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

// Dice and Buttons
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Roll Dice Button
btnRollDice.addEventListener('click', function () {
  // Generate Random dice Value
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display the dice vale in Image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for rolled if 1 or !1
  if (dice !== 1) {
    // add dice to current Score
    currentScore += dice;
    //dynamically changing the ID name of Current score using the active Player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to Next Player by Initializing Current Score and text content of active player to 0
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // Ternary Condition to switch the active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // toggling both at same time ensures it is active in only section element
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHoldDice.addEventListener('click', function () {});
