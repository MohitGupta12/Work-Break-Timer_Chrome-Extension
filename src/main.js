//Global Variables
const time_el = document.querySelector('.watch .timer');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');
const audio_el = document.getElementById('audio');

let seconds = 0;
let interval = null;
let rep_completed = 1;
let will_pause = false;
let hrs,mins,secs,temp=0;
audio_el.loop = true;

//Event Listeners

start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', pause);
reset_btn.addEventListener('click', reset)

//Update the Timers

function timer() {
    
    seconds++;
     hrs = Math.floor(seconds / 3600);
     mins = Math.floor((seconds - (hrs * 3600)) / 60);
     secs = seconds % 60;
    
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (hrs < 10) {
        hrs = '0' + hrs;
        temp = '0' + rep_completed;    
    }
    
    time_el.innerText = `${hrs}:${mins}:${secs}`;

    if (hrs == temp) {
        RingAlarm();
    }


}

function start(){
    if (interval) {
        return
    }
    interval = setInterval(timer, 1);
    will_pause = true;
}

function pause() {
    clearInterval(interval);
    interval = null;
    audio_el.pause();
    if ((hrs == temp) && will_pause) {
       rep_completed++;
    }
    will_pause = false;
}

function reset() {
    clearInterval(interval);
    interval = null;
    audio_el.pause();  
    seconds = 0;
    time_el.innerText = `00:00:00`;
    rep_completed = 1;
}

function RingAlarm() {
    clearInterval(interval);
    interval = null;
    audio_el.play();
}





// Add function to beep a timer when hit 1 hour mark
// Add function to store no. of hour worked