var currentDayEl = document.getElementById("currentDay");

// calculate date of today and format
var currentDate = moment().format("dddd, MMMM Do");
// set today as text in html
currentDayEl.innerText=currentDate;


// calculate current time and format
var currentTime = moment().format("hA");
console.log(currentTime);

// set colors according to time
function timeColor(){
    switch (currentTime) {
        case "9AM":
            $("#hour9").addClass("present");
            $("#hour10").addClass("future");
            $("#hour11").addClass("future");
            $("#hour12").addClass("future");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "10AM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("present");
            $("#hour11").addClass("future");
            $("#hour12").addClass("future");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "11AM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("present");
            $("#hour12").addClass("future");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "12PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("present");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "1PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("present");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "2PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("present");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "3PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("past");
            $("#hour3").addClass("present");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "4PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("past");
            $("#hour3").addClass("past");
            $("#hour4").addClass("present");
            $("#hour5").addClass("future");
            break;

        case "5PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("past");
            $("#hour3").addClass("past");
            $("#hour4").addClass("past");
            $("#hour5").addClass("present");
            break;
    };
};

function saveBtnHandler() {
    var userInput= inputEl.value;
    console.log("button clicked");
};

timeColor();

saveBtn.addEventListener("click", saveBtnHandler);