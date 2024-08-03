'use strict';
let random = Math.floor(Math.random() * 21);
random <= 0 && random >= 20;
let score = 20;

let highscore = 0;
let num;
const callMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  let num = Number(guess);

  score >= 0;
  if (!guess) {
    callMessage('no number');
  } else if (num > 20 || num < 0) {
    callMessage('Not between 0 and 20');
  } else if (num <= 20 && num >= 0) {
    if (random === num) {
      callMessage('correct number🎉');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      // document.querySelector('.number').style.fontSize = '30rem';
      document.querySelector('.number').textContent = num;
      if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
      }
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    } else if (random !== num) {
      callMessage(random > num ? 'too low' : 'too high');
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        score = 0;
        document.querySelector('.score').textContent = score;
      }
    }
    // } else if (random < num) {
    //   document.querySelector('.message').textContent = 'too high';
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     score = 0;
    //     document.querySelector('.score').textContent = score;

    //     document.querySelector('.message').textContent = 'you lost';
    //   }
    // } else if (random > num) {
    //   document.querySelector('.message').textContent = 'too low';
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     score = 0;
    //     document.querySelector('.score').textContent = score;

    //     document.querySelector('.message').textContent = 'you lost';
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener(
  'click',
  function () {
    score = 20;
    random = Math.floor(Math.random() * 21);
    callMessage('start guessing');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }
  // document.querySelector('.number').style.fontSize = '3rem';
);
