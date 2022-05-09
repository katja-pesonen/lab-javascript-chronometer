class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) callback();
   
    }, 1000)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60 );
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let numberToString = value.toString();
    if (numberToString.length === 2) {
      return numberToString
    }
    else {
      return `0${numberToString}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    const minutesOnWatch = this.computeTwoDigitNumber(this.getMinutes())
    const secondsOnWatch = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutesOnWatch}:${secondsOnWatch}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
