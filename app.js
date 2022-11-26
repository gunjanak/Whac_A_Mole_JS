//get all elements with class square  and put it in squares
// here squares in an object
const squares = document.querySelectorAll('.square')

//select first element with class mole
const mole = document.querySelector('.mole')

//select element with the id=time-left
const timeLeft = document.querySelector('#time-left')

//select element with the id=score
const score = document.querySelector('#score')

//select the Play Again Button
const button  = document.querySelector('#play')



let result = 0
let hitPosition
let currentTime = 10
let timerId = null
let countDownTimerId = null
timeLeft.textContent = currentTime
let delay = 1000


function randomSquare() {

    //removing mole from any squares if it exist
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    //select random square
    let randomSquare = squares[Math.floor(Math.random()*9)]
    
    //add 'mole' to that random square
    randomSquare.classList.add('mole')

    //current position of mole
    hitPosition = randomSquare.id
    //console.log('Inside the randomSquare')
   

}



//Check for all squares 
//if the square where user clicked is equal to the square where the mole is 
//then increase the result by one
//display it in text
//set hit position to null


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
       
        if (square.id == hitPosition) {
            result++;
            score.textContent = result
            hitPosition = null
        }

  



    })
})


//the countdown function
function countDown() {


    //display it
    timeLeft.textContent = currentTime

    
    //decrease the current time by one
    currentTime--

    //if current time is zero
    //clear the countDownTimerID
    //clear the timerId
    //display the result
    if (currentTime < 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is'+result);
      //  location.reload();
    }
 

    
    
    

}

function moveMole() {
    
    score.textContent = 0
    currentTime = 10
    result = 0

    countDownTimerId = setInterval(countDown,1000)
    //calling the function randomSuare in every 1000ms
    timerId = setInterval(randomSquare,1000)
   

}





button.onclick = moveMole



