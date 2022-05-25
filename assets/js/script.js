var currentDayEl = document.getElementById("currentDay");

var currentDate = moment().format("dddd, MMMM Do");
currentDayEl.innerText=currentDate;

var currentTime = moment().format("h:mmA");
console.log(currentTime);

