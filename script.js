// Game functionality

// Starting the game

let score = 0

let time = 60

let divToWhack = document.querySelectorAll('.putin')
console.log(divToWhack)

buttonStart = document.getElementById('my-button')
console.log(buttonStart)

gameBoard = document.getElementById('game')
console.log(gameBoard)

gameStartScreen = document.getElementById('no-game')
console.log(gameStartScreen)



function startGame() {
    buttonStart.innerText = 'Restart';
    gameStartScreen.classList.remove('no-game');
    gameBoard.classList.remove('hidden');
    divToWhack.forEach(item => {
    item.src="./img/Putin.png"
     })
     score = 0;
     scoreScreen.innerText = score;
     time = 60;
     timeScreen.innerText = time
}

buttonStart.addEventListener('click', startGame)


// Time

let timeScreen = document.getElementById('time-screen')
console.log(timeScreen)


timeScreen.innerText = time

// Score 


function addPoints(a) {
    score = score + a;
    return score
}


let scoreScreen = document.getElementById('score-screen')
console.log(scoreScreen)

console.log(score)

scoreScreen.innerText = score

// Playing the game


divToWhack.forEach(item => {
    item.addEventListener('click', event => {
        console.log(item)
        item.src="./img/Putin-dead.png" ;
        addPoints(10);
        scoreScreen.innerText = score;
        })
    });
