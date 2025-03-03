const stopWatch = document.getElementById('stop-watch');
const timer = document.getElementById('set-timer');

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const miliSeconds = document.getElementById('mili-seconds');

const hoursInput = document.getElementById('hours-input');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');
const miliSecondsInput = document.getElementById('mili-seconds-input');

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let interval;
let hoursCount = 0;
let minutesCount = 0;
let secondsCount = 0;
let miliSecondsCount = 0;
const zero = 0;

// for stop watch
function stopWatchStart() {
    interval = setInterval(() => {
        miliSecondsCount += 1;
        miliSeconds.textContent = miliSecondsCount.toString().padStart(2, '0');
        // console.log(miliSecondsCount);
        if(miliSecondsCount == 100){
            miliSecondsCount = 0;
            secondsCount += 1;
            seconds.textContent = secondsCount.toString().padStart(2, '0');
            if (secondsCount == 60) {
                secondsCount = 0;
                minutesCount += 1;
                minutes.textContent = minutesCount.toString().padStart(2, '0');
                if(minutesCount == 60){
                    minutesCount = 0;
                    hoursCount += 1;
                    hours.textContent = hoursCount.toString().padStart(2, '0');
                    if (hoursCount == 24) {
                        hoursCount = 0;
                    }
                }
            }
        }
        
    }, 10)
}


function timerStart() {
    let hoursInputVal = hoursInput.value;
    let minutesInputVal = minutesInput.value;
    let secondsInputVal = secondsInput.value;
    let miliSecondInputVal = miliSecondsInput.value;

    if (hoursInputVal < 0 && minutesInputVal < 0 && secondsInputVal < 0 && miliSecondInputVal < 0) {
        alert ('Enter Positive Value')
        reset()
        return;
    } 
    else if (hoursInputVal < 0 || minutesInputVal < 0 || secondsInputVal < 0 || miliSecondInputVal < 0){
        alert ('Enter Positive Value')
        reset()
        return;
    }

    interval = setInterval(() => {
        miliSecondInputVal -= 1;
        miliSeconds.textContent = miliSecondInputVal.toString().padStart(2, '0');
        if (miliSecondInputVal == -1){
            miliSecondInputVal = 99;
            secondsInputVal -= 1;
            seconds.textContent = secondsInputVal.toString().padStart(2, '0');
            if (secondsInputVal == -1) {
                secondsInputVal = 59;
                minutesInputVal -= 1;
                minutes.textContent = minutesInputVal.toString().padStart(2, '0');
                if (minutesInputVal == -1) {
                    minutesInputVal = 59;
                    hoursInputVal -= 1;
                    hours.textContent = hoursInputVal.toString().padStart(2, '0');
                    if (hoursInputVal == -1) {
                        hoursInputVal = 23
                    }
                }
            }
        }
        if(miliSecondInputVal == 0 && secondsInputVal == 0 && minutesInputVal == 0 && hoursInputVal == 0){
            stop();
            console.log("this is end");
            alert('your Timer is over');
            return;
        }
    } ,10)
}

function stop() {
    clearInterval(interval);
}

function reset() {
    stop();

    hoursCount = zero.toString().padStart(2, '0');
    minutesCount = zero.toString().padStart(2, '0');
    secondsCount = zero.toString().padStart(2, '0');
    miliSecondsCount = zero.toString().padStart(2, '0');

    hours.textContent = hoursCount;
    minutes.textContent = minutesCount;
    seconds.textContent = secondsCount;
    miliSeconds.textContent = miliSecondsCount;

    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
    miliSecondsInput.value = 0;
}

function defaultFunc () {
    hoursInput.hidden = true;
    minutesInput.hidden = true;
    secondsInput.hidden = true;
    miliSecondsInput.hidden = true;
    startButton.addEventListener('click', stopWatchStart)
    stopButton.addEventListener('click', stop)
    resetButton.addEventListener('click', reset)
}

stopWatch.addEventListener('click', () => {
    startButton.removeEventListener('click', timerStart)
    defaultFunc();
})
timer.addEventListener('click', () => { ``
    hoursInput.hidden = false;
    minutesInput.hidden = false;
    secondsInput.hidden = false;
    miliSecondsInput.hidden = false;
    startButton.removeEventListener('click', stopWatchStart)
    startButton.addEventListener('click', timerStart)
    stopButton.addEventListener('click', stop)
    resetButton.addEventListener('click', reset)
})

defaultFunc()

