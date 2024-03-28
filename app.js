setInterval(showClock, 1000);

function showClock() {
  let time = new Date();

  let day = time.getDay();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = null;

  if (hour >= 0 && hour < 12) {
    am_pm = "AM";
  } else {
    am_pm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  //calender

  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const yearList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  day = dayList[day];
  month = yearList[month];

  document.querySelector(".day").innerHTML = day;
  document.querySelector(".date").innerHTML = date;
  document.querySelector(".month").innerHTML = month;
  document.querySelector(".year").innerHTML = year;

  //clock

  document.querySelector(".hours").innerHTML = hour;
  document.querySelector(".minutes").innerHTML = min;
  document.querySelector(".seconds").innerHTML = sec;
  document.querySelector(".am_pm").innerHTML = am_pm;
}

showClock();
