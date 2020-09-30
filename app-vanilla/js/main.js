const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {
  const currTime = moment()
  const targetTime = moment('2020-10-04T23:59:59')
  const diffTime = moment.duration(targetTime.diff(currTime))

  days.innerText = diffTime.days()
  hours.innerText = diffTime.hours()
  minutes.innerText = diffTime.minutes()
  seconds.innerText = diffTime.seconds()
}

updateCountdown()
setInterval(updateCountdown, 1000)
