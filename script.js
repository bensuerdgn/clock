var wakeupTime = 7;
var noon = 12;
var lunchTime = 18;
var napTime = 2;
var partyTime;
var evening = 19;

var showTime = function () {
  var d = new Date();

  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
};

var updateTime = function () {
  var image;
  var message;
  var time = new Date().getHours();

  var timeEvent = document.getElementById("time-event");
  var image = document.getElementById("imageDog");

  if (time == partyTime) {
    image =
      "https://whiskersresort.com/wp-content/uploads/2013/02/Events-party.jpg";
    message = "Let's party";
  } else if (time == wakeupTime) {
    image = "https://barkhappy.com/wp-content/uploads/2017/02/@jiffpom.png";
    message = "wake up time";
  } else if (time == lunchTime) {
    image = "https://iysr.tmgrup.com.tr/2015/06/12/1434033678354.jpg";
    message = "Let's have some lunch!";
  } else if (time == napTime) {
    image = "https://iysr.tmgrup.com.tr/2015/06/12/1434033678354.jpg";
    message = "sleep time";
  } else if (time < noon) {
    image = "https://barkhappy.com/wp-content/uploads/2017/02/@jiffpom.png";
    message = "good morning";
  } else if (time >= evening) {
    image = "https://iysr.tmgrup.com.tr/2015/06/12/1434033678354.jpg";
    message = "good evening";
  } else {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    message = "Good afternoon!";
  }
  timeEvent.innerHTML = message;
  imageDog.src = image;

  showTime();
};

var partyButton = document.getElementById("partyTimeButton");

updateTime();
setInterval(updateTime, 1000);

var partyEvent = function () {
  if (partyTime < 0) {
    partyTime = new Date().getHours();
    partyTimeButton.innerText = "Party Over!";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    partyTime = -1;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#222";
  }
};
partyButton.addEventListener("click", partyEvent);
///partyEvent();

var wakeUpTimeSelector = document.getElementById("wake-up");

var wakeUpEvent = function () {
  wakeupTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunch");

var lunchEvent = function () {
  lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

var napTimeSelector = document.getElementById("nap");

var napEvent = function () {
  napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
