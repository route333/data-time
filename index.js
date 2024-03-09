class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.timer();
  }

  timer() {
    this.timerElements = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
    
    this.timerInterval = setInterval(() => {
      this.startTimer()
    }, 1000);
  }

  startTimer() {
    const time = this.targetDate - new Date();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.timerElements.days.textContent = days < 10 ? "0" + days : days;
    this.timerElements.hours.textContent = hours < 10 ? "0" + hours : hours;
    this.timerElements.mins.textContent = mins < 10 ? "0" + mins : mins;
    this.timerElements.secs.textContent = secs < 10 ? "0" + secs : secs;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2024"),
});
