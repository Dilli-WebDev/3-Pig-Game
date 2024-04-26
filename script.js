'use strict';

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

btnRollDice.addEventListener('click', function () {
  // Generate Random dice Value
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display the dice vale in Image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for rolled
  if (dice !== 1) {
    currentScore += dice;
  } else {
  }
});
