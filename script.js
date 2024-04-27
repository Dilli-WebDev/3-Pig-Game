'use strict';

const jsConfetti = new JSConfetti();

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

// Declaring Variables
let playing = true;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// function to Switch Player
const switchPlayer = function () {
  // Switch to Next Player by Initializing Current Score and text content of active player to 0
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // Ternary Condition to switch the active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggling both at same time ensures it is active in only section element
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll Dice Button
btnRollDice.addEventListener('click', function () {
  if (playing) {
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
      // calling function to switch player
      switchPlayer();
    }
  }
});

// Hold button
btnHoldDice.addEventListener('click', function () {
  if (playing) {
    //Add Current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if score of a player is greater than 100
    if (scores[activePlayer] > 50) {
      playing = false;
      diceEl.classList.add('hidden');
      jsConfetti.addConfetti({
        emojis: ['🐷', '🎉'],
        emojiSize: 60,
        confettiNumber: 50,
      });
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to Next Player
      switchPlayer();
    }
  }
});

// New game Button - resetting the game
btnNewGame.addEventListener('click', function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
});
