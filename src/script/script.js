const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const miliSeconds = document.getElementById('mili-seconds');

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let min;
let sec;
let minisec;

let countMin = 0;
let countSec = 0;
let countMiniSec = 0;

startButton.addEventListener('click', () => {
    min = setInterval(() => {
        countMin += 1;
        if (countMin == 60){
            countMin = 1;
        }
        // console.log(countMiniSec);
        minutes.textContent = countMin;
        
    }, 1000 * 60)

    sec = setInterval(() => {
        countSec += 1;
        if (countSec == 60){
            countSec = 1;
        }
        // console.log(countMiniSec);
        seconds.textContent = countSec;
    }, 1000)

    minisec = setInterval(() => {
        countMiniSec += 1;
        if(countMiniSec == 100){
            countMiniSec = 1;
        }
        // console.log(countMiniSec);
        miliSeconds.textContent = countMiniSec;
    }, 10)
})
stopButton.addEventListener('click', () => {
    clearInterval(min);
    clearInterval(sec);
    clearInterval(minisec);
})
resetButton.addEventListener('click', () => {
    clearInterval(min);
    clearInterval(sec);
    clearInterval(minisec);
    countMin = 0;
    countSec = 0;
    countMiniSec = 0;
    minutes.textContent = countMin;
    seconds.textContent = countSec;
    miliSeconds.textContent = countMiniSec;
})