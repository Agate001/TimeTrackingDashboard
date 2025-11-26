// buttons
let dailybtn = document.getElementById("dailybtn");
let weeklybtn = document.getElementById("weeklybtn");
let monthlybtn = document.getElementById("monthlybtn");

// Work
let workhourscurrent = document.getElementById("work-hours-current");
let workhoursprevious = document.getElementById("work-hours-previous");

// Play
let playhourscurrent = document.getElementById("play-hours-current");
let playhoursprevious = document.getElementById("play-hours-previous");

// Study
let studyhourscurrent = document.getElementById("study-hours-current");
let studyhoursprevious = document.getElementById("study-hours-previous");

// Exercise
let exhourscurrent = document.getElementById("ex-hours-current");
let exhoursprevious = document.getElementById("ex-hours-previous");

// Social
let socialhourscurrent = document.getElementById("social-hours-current");
let socialhoursprevious = document.getElementById("social-hours-previous");

// Self Care
let selfhourscurrent = document.getElementById("self-hours-current");
let selfhoursprevious = document.getElementById("self-hours-previous");

function getData() {
  return fetch("../data.json")
    .then((response) => response.json())
    .then((data) => data);
}

function getLabel(timeframe) { //simple function to get the previous value of current timeframe
  if (timeframe === "daily") return "Yesterday - ";
  if (timeframe === "weekly") return "Last Week - ";
  if (timeframe === "monthly") return "Last Month - ";
}

function updateUI(data, timeframe) { //updates depending on button and reads its like an array because of square brackets in the json file

  // Work
  workhourscurrent.innerText = data[0].timeframes[timeframe].current + "hrs";
  workhoursprevious.innerText =
    getLabel(timeframe) + data[0].timeframes[timeframe].previous + "hrs";

  // Play
  playhourscurrent.innerText = data[1].timeframes[timeframe].current + "hrs";
  playhoursprevious.innerText =
    getLabel(timeframe) + data[1].timeframes[timeframe].previous + "hrs";

  // Study
  studyhourscurrent.innerText = data[2].timeframes[timeframe].current + "hrs";
  studyhoursprevious.innerText =
    getLabel(timeframe) + data[2].timeframes[timeframe].previous + "hrs";

  // Exercise
  exhourscurrent.innerText = data[3].timeframes[timeframe].current + "hrs";
  exhoursprevious.innerText =
    getLabel(timeframe) + data[3].timeframes[timeframe].previous + "hrs";

  // Social
  socialhourscurrent.innerText = data[4].timeframes[timeframe].current + "hrs";
  socialhoursprevious.innerText =
    getLabel(timeframe) + data[4].timeframes[timeframe].previous + "hrs";

  // Self Care
  selfhourscurrent.innerText = data[5].timeframes[timeframe].current + "hrs";
  selfhoursprevious.innerText =
    getLabel(timeframe) + data[5].timeframes[timeframe].previous + "hrs";
}

//button updates
getData().then((data) => {

  updateUI(data, "weekly"); 

  dailybtn.addEventListener("click", function () {
    updateUI(data, "daily");
  });

  weeklybtn.addEventListener("click", function () {
    updateUI(data, "weekly");
  });

  monthlybtn.addEventListener("click", function () {
    updateUI(data, "monthly");
  });
});
