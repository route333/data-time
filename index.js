const targetDate = new Date("Jul 17, 2024");
const day = document.querySelector(`[data-value="days"]`);
const hour = document.querySelector(`[data-value="hours"]`);
const min = document.querySelector(`[data-value="mins"]`);
const sec = document.querySelector(`[data-value="secs"]`);

function startTimer() {
  const time = targetDate - new Date();

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  day.textContent = days < 10 ? "0" + days : days;
  hour.textContent = hours < 10 ? "0" + hours : hours;
  min.textContent = mins < 10 ? "0" + mins : mins;
  sec.textContent = secs < 10 ? "0" + secs : secs;
}

const timerInterval = setInterval(startTimer, 1000);
