'use strict' ;

// get elements

const score1El = document.getElementById('score-1');
const score2El = document.getElementById('score-2');


const current1El = document.getElementById('current-1');
const current2El = document.getElementById('current-2');

const btnNewEl = document.getElementById('btn-new');
const btnRollEl = document.getElementById('btn-roll');
const btnHoldEl = document.getElementById('btn-hold');

const diceEl = document.getElementById('dice');


const player1El = document.getElementById('player-1');
const player2El = document.getElementById('player-2');


// global variables
let scores , currentScore , activePlayer, dice ;



// audio function
// function playMusic(){
//   let audio = new Audio('./audio/rolling-dice.mp3');
//   audio.play();
// }
// functions 

// initial values
function init(){

  // global values
 scores = [0, 0 , 0 ];
 currentScore = 0;
 activePlayer = 1;
 dice = 0 ;
 
score1El.innerText=0;
score2El.innerText=0;
current1El.innerText= 0;
current2El.innerText = 0;

player1El.classList.remove('player-winner');
player2El.classList.remove('player-winner');

player1El.classList.add('player-active');
player2El.classList.remove('player-active');

// activate game btn
btnRollEl.classList.remove('hidden');
btnHoldEl.classList.remove('hidden');

// hide dice
diceEl.classList.add('hidden');

};



// functions random number

function getRandomNumber(num){
  // create random number between 1 to 6

  return Math.floor(Math.random()*num)+1;
};

// toggle function

function switchPlayer(){
  player1El.classList.toggle('player-active');
  player2El.classList.toggle('player-active');
// display score

  document.getElementById(`score-${activePlayer}`).innerText=scores[activePlayer];
  currentScore=0;

  document.getElementById(`current-${activePlayer}`).innerText=currentScore;

// switch active player
  // if(activePlayer=== 1){
  //   activePlayer= 2;

  // }else if (activePlayer === 2){
  //   activePlayer = 1;


  // }
// ternary operators switch players
  activePlayer = activePlayer === 1 ? 2 : 1;
 };


// event listeners
btnRollEl.addEventListener('click' , function(){

  // get random number to 6

 dice = getRandomNumber(6);
 

 //  display dice
//  playMusic()
 diceEl.classList.remove('hidden');
 diceEl.src=`./images/dice-${dice}.png`
 

  // dice === 1

  if(dice !== 1){
    currentScore = currentScore + dice;
    console.log(currentScore)
// display current score to ui 
    document.getElementById(`current-${activePlayer}`).innerText=currentScore;
  }else{
    // switch to other player 
    switchPlayer();

  }
});


  // add current score to score 

  btnHoldEl.addEventListener('click' , function(){
    scores[activePlayer] = scores[activePlayer] + currentScore;
    currentScore= 0;
    document.getElementById(`current-${activePlayer}`).innerText=currentScore;


// if score is >=100
    if(scores[activePlayer] >= 10){

      // player wins
      document.getElementById(`player-${activePlayer}`).classList.remove('player-active');

      document.getElementById(`player-${activePlayer}`).classList.add('player-winner');

      document.getElementById(`score-${activePlayer}`).innerText=scores[activePlayer];

      diceEl.classList.add('hidden');
      btnRollEl.classList.add('hidden');
      btnHoldEl.classList.add('hidden');
// switch  player
    }else{
      switchPlayer();

    }
  });



// btn to new game
btnNewEl.addEventListener('click' , function(){ 
  init();

});
// initial setup
init();










