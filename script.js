
// Bypass music not autoplaying on Chrome

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}


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

let timeInterval


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
     timeInterval = setInterval(function() {
        time = time-1;
        timeScreen.innerText = time
        if (time === 0) {
          clearInterval(timeInterval)
      }}, 1000);
}

// function winGame()

// function loseGame()


// function endGame(){
//     if (score>=250) {
//         winGame()
//     } else {
//         loseGame()
//     }
// }


function restartGame() {
    clearInterval(timeInterval)
    startGame()
}

buttonStart.addEventListener('click', restartGame)


// select random divs to show

let randomPutin
let oldRandomPutin

let randomPutinInt
let oldRandomPutinInt


randomPutinInt = setInterval(function() {
    const index = Math.floor(Math.random() * (0 - divToWhack.length + 1)) + divToWhack.length;
    randomPutin = divToWhack[index]
    randomPutin.classList.add('visible')
    oldRandomPutin = randomPutin
  }, 2005);


oldRandomPutinInt = setInterval(function() {
    oldRandomPutin.classList.remove('visible')
  }, 1995);


// Time display

let timeScreen = document.getElementById('time-screen')
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

// Playing the game


divToWhack.forEach(item => {
    item.addEventListener('click', event => {
        console.log(item)
        item.src="./img/Putin-dead.png" ;
        document.getElementById('hidden-sound').play();
        addPoints(10);
        scoreScreen.innerText = score;
        setTimeout(function() {
        item.src="./img/Putin.png" ;
        }, 1000);
        })
    });
