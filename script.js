
// Bypass music not autoplaying on Chrome

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}


// Playing the game

let score = 0

let time = 60

let divToWhack = document.querySelectorAll('.putin')
console.log(divToWhack)

let buttonStart = document.getElementById('my-button')
console.log(buttonStart)

let gameBoard = document.getElementById('game')
console.log(gameBoard)

let gameStartScreen = document.getElementById('no-game')
console.log(gameStartScreen)

let gameWinScreen = document.getElementById('win-game')
console.log(gameWinScreen)

let gameLooseScreen = document.getElementById('loose-game')
console.log(gameLooseScreen)

let timeInterval
let randomPutin
let oldRandomPutin

let randomPutinInt
let oldRandomPutinInt


function startGame() {
    buttonStart.innerText = 'Restart';
    gameStartScreen.classList.remove('no-game');
    gameWinScreen.classList.add('hidden');
    gameWinScreen.classList.remove('win-game');
    gameLooseScreen.classList.add('hidden');
    gameLooseScreen.classList.remove('loose-game');
    gameBoard.classList.remove('hidden');
    divToWhack.forEach(item => {
    item.src="./img/Putin.png"
     })
     
    randomPutinInt = setInterval(function() {
        const index = Math.floor(Math.random() * (0 - divToWhack.length + 1)) + divToWhack.length;
        randomPutin = divToWhack[index]
        randomPutin.classList.add('visible')
        oldRandomPutin = randomPutin
    }, 2005);


    oldRandomPutinInt = setInterval(function() {
        oldRandomPutin.classList.remove('visible')
    }, 1995);

     score = 0;
     scoreScreen.innerText = score;
     time = 60;
     timeScreen.innerText = time;
     timeInterval = setInterval(function() {
        time = time-1;
        timeScreen.innerText = time
        if (time === 0) {
          clearInterval(timeInterval);
          clearInterval(randomPutinInt);
          clearInterval(oldRandomPutinInt);
          gameBoard.classList.add('hidden');
          endGame();
      }}, 1000);
}

function winGame(){
    gameWinScreen.classList.remove('hidden');
    gameWinScreen.classList.add('win-game');
}

function loseGame(){
    gameLooseScreen.classList.remove('hidden');
    gameLooseScreen.classList.add('loose-game');
}


function endGame(){
    if (score >= 250) {
        winGame()
    } else {
        loseGame()
    }
}


function restartGame() {
    clearInterval(timeInterval);
    clearInterval(randomPutinInt);
    clearInterval(oldRandomPutinInt);
    startGame();
}

buttonStart.addEventListener('click', restartGame);


// Time display

let timeScreen = document.getElementById('time-screen');
console.log(timeScreen)


// Score 


function addPoints(a) {
    score = score + a;
    return score
}


let scoreScreen = document.getElementById('score-screen')
console.log(scoreScreen)

console.log(score)

scoreScreen.innerText = score

// When shooting


divToWhack.forEach(item => {
    item.addEventListener('click', event => {
        console.log(item)
        item.src="./img/Putin-dead.png" ;
        document.getElementById('hidden-sound').play();
        navigator.vibrate(50);
        addPoints(10);
        scoreScreen.innerText = score;
        setTimeout(function() {
        item.src="./img/Putin.png" ;
        }, 1000);
        })
    });

// On iOS

    divToWhack.forEach(item => {
        item.addEventListener('touchstart', event => {
            console.log(item)
            item.src="./img/Putin-dead.png" ;
            document.getElementById('hidden-sound').play();
            navigator.vibrate(50);
            addPoints(10);
            scoreScreen.innerText = score;
            setTimeout(function() {
            item.src="./img/Putin.png" ;
            }, 1000);
            })
        });