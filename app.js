let timeDisplay =document.querySelector('.time-display');

let red = document.querySelector('#red');
let green = document.querySelector('#green');
let yellow = document.querySelector('#yellow');


let msec = 0;
let secs = 0;
let mins= 0;

let timerId = null;

green.addEventListener("click",function (){
    console.log("button click");
  if(timerId !== null){
    clearInterval(timerId);
}
   timerId= setInterval(startTimer,10);
});

red.addEventListener("click",function(){
    clearInterval(timerId);
    
    });
    yellow.addEventListener("click",function(){
        clearInterval(timerId);
        timeDisplay.innerHTML = `00 : 00 : 00`;
        msec = secs = mins = 0;
        
        });

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
   
    timeDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
};

