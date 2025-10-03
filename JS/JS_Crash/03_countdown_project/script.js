const startButton = document.getElementById("startButton")
const timeInput = document.getElementById("timeInput")
const countdownDisplay = document.getElementById('countdownDisplay')
function startTimer(){
    console.log('hello');
    
    let valueInSeconds = parseInt(timeInput.value)

    if(isNaN(valueInSeconds)){
        countdownDisplay.innerText = 'Please enter valid number'
        return
    }

    if(valueInSeconds <=0){
        countdownDisplay.innerText = "Please enter seconds > 0"
        return
    }

    const timer =setInterval(function(){
        valueInSeconds--;
        countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`

        if(valueInSeconds <= 0){
            clearInterval(timer)
            countdownDisplay.innerText = 'Time up'
        }
    },1*1000)
}
startButton.addEventListener('click',startTimer)