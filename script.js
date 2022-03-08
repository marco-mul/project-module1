// Game functionality

// Function startGame





// Time

time = 60

let timeScreen = document.getElementById('time-screen')
console.log(timeScreen)

timeScreen.innerText = time

// Score 

let score = 25
let scoreScreen = document.getElementById('score-screen')
console.log(scoreScreen)

scoreScreen.innerText = score

let divToWhack = document.querySelectorAll('.hole-up')
console.log(divToWhack)


/*divToWhack.forEach(element => element.addEventListener('click', function(){
    divToWhack.classList.add('putin-dead')
}));
*/


