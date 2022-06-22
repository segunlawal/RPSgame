//Computer makes a choice
function computerPlay(){
    var compch = ['Rock', 'Paper', 'Scissors']
    var compchoice = compch[Math.floor(Math.random()*3)]
    return compchoice;
} 
var computerSelection = computerPlay()

var rock = document.querySelector('.rock')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')

//Player makes a choice
rock.addEventListener('click', function(){playsingleround('rock', computerSelection)})
paper.addEventListener('click', function(){playsingleround('paper', computerSelection)})
scissors.addEventListener('click', function(){playsingleround('scissors', computerSelection)})

var compwin = 0;
var playerwin = 0;
var tiedraw = 0;

//Play Game
function playsingleround (playerSelection, computerSelection){

    var computerSelection = computerPlay()
    var x = playerSelection.toLowerCase();
    var y = computerSelection.toLowerCase();

    if(x=='rock'){
        if(y=='paper'){compwin++; displayResults('You lose! Paper covers Rock')}
        if(y=='scissors'){playerwin++; displayResults('You win! Rock destroys Scissors')}
        if(y=='rock'){tiedraw++; displayResults('Tie!')}
    }
    if(x=='paper'){
        if(y=='rock'){playerwin++; displayResults ('You win! Paper covers Rock')}
        if(y=='scissors'){compwin++; displayResults ('You lose! Scissors cuts Paper')}
        if(y=='paper'){tiedraw++; displayResults ('Tie!')}
    }
    if(x=='scissors'){
        if(y=='rock'){compwin++; displayResults ('You lose! Rock destroys Scissors')}
        if(y=='paper'){playerwin++; displayResults ('You win! Scissors cuts Paper')}
        if(y=='scissors'){tiedraw++; displayResults ('Tie!')}
    }

}

//DOM
var results = document.querySelector('.results')
var compbox = document.querySelector('.comp-box')
var scoreboard = document.querySelector('.score-board')
var champbox = document.querySelector('.champ-box')
var displaybox = document.querySelector('.display-box')

function displayResults(str){
    results.textContent = str;
    compbox.textContent = 'Computer says '+ computerSelection;
    scoreboard.textContent = 'Comp- ' + compwin + ' Player- ' + playerwin + ' Tie- ' + tiedraw
    if(compwin===5 || playerwin===5 || tiedraw === 5){endGame()}
}

function endGame(){
    if(compwin===5){displaybox.textContent = 'Hard luck! The computer won!!';}
    else if (playerwin===5){displaybox.textContent = 'Well done Champ! You won!!'}
    else if (tiedraw===5){displaybox.textContent =  'The game ended in a draw!'}
    //Disable buttons at the end of the game
    rock.setAttribute("disabled", 1);
    paper.setAttribute("disabled", 1);
    scissors.setAttribute("disabled", 1);
    //Play Again button
    var button = document.createElement("button");
    button.setAttribute('class', 'btn btn-danger')
    var a = document.createElement('a');
    a.href = "index.html"
    a.appendChild(button);
    champbox.appendChild(a);
    button.textContent = 'Play Again'
    
}




