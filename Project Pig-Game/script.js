let scores,roundScore,activePlayer,gamePlaying;
init();


//dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-' + activePlayer).textContent = dice;
//write the id of the element from the htmml
// let x = document.querySelector('#score-0').textContent;
// console.log(x);




//Making the roll dice button to work
document.querySelector('.btn-roll').addEventListener('click',function(){
  //Do something
  //1 . Random Number
  if(gamePlaying){
    let dice = Math.floor(Math.random() * 6 )+1;
    //display the result
    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';

    //3.Update the round score if the roll is not one(1);
  if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }
  else {
    nextPlayer();
    }
}

});

document.querySelector('.btn-hold').addEventListener('click',function(){
//Add current score to global
  if(gamePlaying){
    scores[activePlayer] += roundScore;
  //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    if(scores[activePlayer]>=20) {
      document.querySelector("#name-"+activePlayer).textContent = 'winner!';
      document.querySelector(".player-"+ activePlayer+ "-panel").classList.add('winner');
      document.querySelector(".player-"+ activePlayer+ "-panel").classList.remove('active');
      gamePlaying=false;
    }else {
      nextPlayer();
    }
 }

});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '1';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying=true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = "Player 1";
  document.getElementById('name-1').textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove('winner');
  document.querySelector(".player-1-panel").classList.remove('winner');
  document.querySelector(".player-0-panel").classList.remove('active');
  document.querySelector(".player-1-panel").classList.remove('active');
  document.querySelector(".player-0-panel").classList.add('active');
}
