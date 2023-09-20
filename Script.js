window.onload = function(){
    let startButton = document.getElementById("start");
    let resetButton = document.getElementById("reset"); 
    let breakButton = document.getElementById("break");

    let timerElement = document.getElementById("timer");

    startButton.addEventListener("click", startTimer);
    breakButton.addEventListener("click",breakTimer);
    resetButton.addEventListener("click", resetTimer);
    
    function TimeZero(timeLeft){
        if(timeLeft===0){
            clearInterval(timer);
            timerElement.innerHTML= "00:00";
            startButton.disabled=false;
            resetButton.disabled=true;
            breakButton.disabled=false;
        }
    }
    function formatTime(minutes){
        return minutes <10? "0" + minutes:minutes;
    }

    function startTimer(){
        startButton.disabled=true;
        resetButton.disabled=false;
        breakButton.disabled=true;

        let timeLeft = 25*60;
                
        timer = setInterval(function(){
        let minutes = Math.floor(timeLeft/60);
        let seconds= timeLeft%60;

        formatTime(minutes);

        timerElement.innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
        timeLeft --;

        TimeZero(timeLeft);

        },1000);
    }

    function resetTimer(){
        clearInterval(timer);
        timerElement.innerHTML = "00:00";
        startButton.disabled=false;
        resetButton.disabled=true;
        breakButton.disabled=false;
       }

    function breakTimer(){
        timeLeft = 15*20;

        timer = setInterval(function(){
            minutes = Math.floor(timeLeft/60);
            seconds = timeLeft%60;

            formatTime(minutes);

            timerElement.innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
                startButton.disabled=true;
                resetButton.disabled=false;
                breakButton.disabled=true;
            timeLeft--;

            TimeZero(timeLeft);

        },1000);
    }
};