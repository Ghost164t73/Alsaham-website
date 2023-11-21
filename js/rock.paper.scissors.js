document.body.addEventListener('keydown' , (event) => {
    if(event.key === 'r') {
        playGame('Rock')
    }else if(event.key === 's') {
        playGame('Scissors')
    }else if(event.key === 'p') {
        playGame('Paper')
    }
});


document.querySelector('.js-button')
 .addEventListener('click' , () => {
    playGame('Scissors')
 })

 document.querySelector('.js-button-paper')
 .addEventListener('click' , () => {
    playGame('Paper')
 })

 document.querySelector('.js-button-rock')
 .addEventListener('click' , () => {
    playGame('Rock')
 })

let score = {
    Losses : 0,
    Wins : 0,
    Ties : 0,
};

function playGame (playerMove) {
    const computerMove = pickComputerMove();

let result = ''

if(playerMove === 'Scissors') {
if (computerMove === 'Scissors') {
    result ='Its a tie.'
} else if (computerMove === 'Rock') {
    result = 'You lose.'
}else if(computerMove === 'Paper') {
    result = 'You win.' 
}

}else if(playerMove === 'Rock') {
if (computerMove === 'Scissors') {
        result ='You win.'
    } else if (computerMove === 'Rock') {
        result = 'Its a tie.'
    }else if(computerMove === 'Paper') {
        result = 'You lose.'
    }

}else if(playerMove === 'Paper') {
if(computerMove === 'Scissors') {
    result = 'You lose.';
}else if (computerMove === 'Paper') {
    result = 'Its a tie.'
}else if (computerMove === 'Rock') {
    result = 'You win.'
}
}   
if(result === 'You win.') {
    score.Wins++ ;
}else if (result === 'You lose.') {
    score.Losses++ ;
}else if (result === 'Its a tie.') {
    score.Ties ++;
}

updateScoreElement();

    
document.querySelector('.js-moves')
.innerHTML = `you ${playerMove} - ${computerMove} computer` ;

document.querySelector('.js-result')
.innerHTML = result ;


};

function updateScoreElement() {
document.querySelector('.js-score')
 .innerHTML = `Losses : ${score.Losses} Wins :${score.Wins} Ties : ${score.Ties} `

}
    function pickComputerMove () {
        const randomMove = Math.floor(Math.random () * 3);

    let computerMove = ''

    if( randomMove === 0) {
        computerMove = 'Rock';
    }else if (randomMove === 1) {
        computerMove = 'Scissors';
    }else {
        computerMove = 'Paper';
    }

    return computerMove;

    }
