function updateClock(){
    const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const now = new Date()
const hours = now.getHours() % 12 || 12
const newHours = hours < 10 ? `0${hours}` : `${hours}`
const mintue = now.getMinutes()
const newMintue = mintue < 10 ? `0${mintue}` : `${mintue}`
// const minitue = now.getMinutes().toString().padStart(2,"0")
const seconds = now.getSeconds()
const newSecond = seconds < 10 ? `0${seconds}` : `${seconds}`
const ampm = now.getHours() >= 12  ? "PM" : "AM"

timeElement.textContent = `${newHours}:${newMintue}:${newSecond} ${ampm}`
const options = {
    weekday : "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}
dateElement.textContent = now.toLocaleDateString(undefined,options)
}

setInterval(updateClock,1000)

updateClock()

// 0 || 2 || undefined
// null || 0 