const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const timeNow = (printMinutes())&&(printSeconds())
  chronometer.start(timeNow)
}

function printMinutes() {
  const minsNow = (minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes('minUni')))
  return minsNow
}

function printSeconds() {
  const secsNow = secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds('secUni'))
  return secsNow
}

// ==> BONUS
function printMilliseconds() {
  
  
}

function printSplit() {
  splitsElement.innerHTML = 'splits'
}

function clearSplits() {
  splitsElement.innerHTML = 0
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.className = 'btn stop'
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if ( btnLeftElement.innerHTML === 'START') {
    chronometer.start()
    setStopBtn()
    setSplitBtn()

    printMinutes()
    printSeconds()
    
  }
  else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
    
  }

  console.log('Button left clicked')
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  console.log('Button right clicked')
  if (btnRightElement.innerText === 'RESET') {
    clearSplits()
  }
  else {
    printSplit()
  }
});

