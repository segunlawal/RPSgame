
var compch = ['Rock', 'Paper', 'Scissors']
var compwin = 0;
var playerwin = 0;
var tiedraw = 0;
  


function computerPlay(){
    var compch = ['Rock', 'Paper', 'Scissors']
    var compchoice = compch[Math.floor(Math.random()*3)]
    return compchoice;
}


playsingleround = (playerSelection, computerSelection)=>{
    var playerSelection = prompt('choose')
    var computerSelection = computerPlay()

    var x = playerSelection.toLowerCase();
    var y = computerSelection.toLowerCase();
    // console.log("Me- " + x);
    // console.log("Computer- " + y);

    if(x=='rock'){
        if(y=='paper'){compwin++; return ('You lose! Paper covers Rock')}
        if(y=='scissors'){playerwin++; return ('You win! Rock destroys Scissors')}
        if(y=='rock'){tiedraw++; return ('Tie!')}
    }
    if(x=='paper'){
        if(y=='rock'){playerwin++; return ('You win! Paper covers Rock')}
        if(y=='scissors'){compwin++; return ('You lose! Scissors cuts Paper')}
        if(y=='paper'){tiedraw++; return ('Tie!')}
    }
    if(x=='scissors'){
        if(y=='rock'){compwin++; return ('You lose! Rock destroys Scissors')}
        if(y=='paper'){playerwin++; return ('You win! Scissors cuts Paper')}
        if(y=='scissors'){tiedraw++; return ('Tie!')}
    }

}

// console.log((playsingleround()));

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playsingleround());
        console.log(
            "Computer- " + compwin + " Player- " + playerwin + " Tie- " + tiedraw)
    }
    if(playerwin > compwin){console.log('Well done Champ! You won!!')}
    else if(compwin > playerwin){console.log('Hard luck! Better luck next time!!')}
    else{console.log('The game ended in a draw!')}
    
}

game()

