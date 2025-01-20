let score = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();//show up on the website

  function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber <1/3){
      computerMove = 'Rock';
    }else if(randomNumber >= 1/3 && randomNumber <2/3){
      computerMove = 'Paper';
    }else{
      computerMove = 'Scissors';
    }
    return computerMove;
  }

  function playGame(choice){
    let result = '';
    const computerMove = pickComputerMove();

    if(computerMove === 'Rock' && choice === 'Scissors' || computerMove === 'Scissors' && choice === 'Paper' || computerMove === 'Paper' && choice === 'Rock'){
      result = 'You lose!';
      score.losses++;
    }else if(computerMove === choice){
      result = 'Tie!';
      score.ties++;
    }else{
      result = 'You win!';
      score.wins++;
    }

    localStorage.setItem('score', JSON.stringify(score));//localStorage can only handle Strings

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = 
        `You <img src="images/${choice.toLowerCase()}-emoji.png" class="move-icon">
        <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-icon"> Computer`;
  
    updateScoreElement();//update the website showup
  }

  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = 'Wins: ' + score.wins + ', Losses: ' + score.losses + ', Ties: ' + score.ties;
  }
