let scores = {
    wins: 0,
    losses: 0,
    ties: 0
}



function playGame (playerMove) {

    const computerMove  = selectComputerMove();
    let result = '';

    if(playerMove === 'Rock'){
        if(computerMove === 'Scissors'){
            result = 'You win.';
        }else if(computerMove === 'Rock') {
            result = 'Tie.';
        }else if(computerMove === 'Paper') {
            result = 'You lose.';
        }
    }

    else if(playerMove === 'Paper'){
        if(computerMove === 'Scissors'){
            result = 'You lose.'
        }else if(computerMove === 'Paper') {
            result = 'Tie.';
        }else if(computerMove === 'Rock') {
            result = 'You win.';
        }
    }

    else if(playerMove === 'Scissors') {
        if(computerMove === 'Scissors'){
            result = 'Tie.'
        }else if(computerMove === 'Paper') {
            result = 'You win.';
        }else if(computerMove === 'Rock') {
            result = 'You lose.';
        }
    }

    if(result === 'You win.'){
        scores.wins++
    }else if(result === 'You lose.'){
        scores.losses++
    }else if(result === 'Tie.'){
        scores.ties++
    }


    updateScoreElement();


    document.querySelector('.js-moves').innerHTML = `You ${playerMove} - computer ${computerMove}`

    document.querySelector('.js-result').innerHTML = result;

}

function updateScoreElement() {
    document.querySelector('.js-score')
     .innerHTML =` Losses : ${scores.losses} . Wins : ${scores.wins} . Ties: ${scores.ties}`

}


function selectComputerMove() {

const randomMove = Math.random()

let computerMove = ''
if(randomMove <= 1/3){
    computerMove = 'Scissors'
}else if(randomMove > 1/3 && randomMove <2/3 ){
    computerMove = 'Rock';
}else{
    computerMove = 'Paper'
}

return computerMove;

console.log(randomMove)
}
