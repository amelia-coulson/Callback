// Variable to store counter time
let intervalID;
// create counter variable
let counter = 0;

// create function to start timer
let startCounter = function() {
    // increment counter every second
    intervalID = setInterval(function() { 
        // increment counter
        counter++;
        // outputing the current value
        console.log(counter);
        // 1 second
    }, 1000);
}

// function to stop counter
function stopCounter() {
    clearInterval(intervalID);
}

// start button
let startButton = document.getElementById('start');
// stop button
let stopButton = document.getElementById('stop');

// counter starts when HTML button is clicked
startButton.addEventListener("click", startCounter);
// counter stops when HTML button is clciked
stopButton.addEventListener("click", stopCounter);

