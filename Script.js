window.onload = function(){
    let startButton = document.getElementById("start");
    let resetButton = document.getElementById("reset");

    let timerElement = document.getElementById("timer");

        startButton.addEventListener("click", startTimer);


            function startTimer(){

                resetButton.addEventListener("click", resetTimer);
                
                startButton.disabled=true;
                resetButton.disabled=false;

                let timeLeft = 25*60;
                
                timer = setInterval(function(){
                    let minutes = Math.floor(timeLeft/60);
                    let seconds= timeLeft%60;

                    timerElement.innerHTML=formatTime(minutes) + ":" + formatTime(seconds);

                    if(timeLeft===0){
                        clearInterval(timer);
                        startButton.disabled=false;
                        resetButton.disabled=true;
                        }
                        timeLeft--;
                },1000);
                        function resetTimer(){
                            clearInterval(timer);
                            timerElement.innerHTML = "25:00";
                            startButton.disabled=false;
                            resetButton.disabled=true;
                        }
                        function formatTime(time){
                            return time <10? "0" + time:time;
                        }
            }


};