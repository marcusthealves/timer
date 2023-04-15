const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const miliseconds = document.querySelector('#miliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval;
let min = 0;
let sec = 0;
let milisec = 0;
let isPaused = false;

startBtn.addEventListener('click', startTime);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click',resetTimer)

function startTime() {
    interval = setInterval(() => {

            if(!isPaused) {
            milisec += 10;

           if(milisec === 1000) {
                sec++;
                milisec = 0;
           }
           
           if(sec === 60) {
                min++;
                sec = 0;
           }

           minutes.textContent = formatarTime(min);
           seconds.textContent = formatarTime(sec);
           miliseconds.textContent = milisec;
        }
        
    }, 10 );

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}
    function pauseTimer(){
        isPaused = true
        pauseBtn.style.display = "none";
        resumeBtn.style.display =" block";
    }

    function resumeTimer() {
        isPaused = false;
        pauseBtn.style.display = "block";
        resumeBtn.style.display = "none";
    }

    function resetTimer() {
        clearInterval(interval)
        min = 0;
        sec = 0;
        milisec = 0;

        minutes.textContent = "00"
        seconds.textContent = "00"
        miliseconds.textContent = "000"

        startBtn.style.display = "block";
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "none"
    }

    function formatarTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function formataMiliseconds(time) {
        return time < 100 ? `${time}`.padStart(3,"0") : time;
    }



