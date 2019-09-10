//
//  Key Generator
//

var speed = 3000 //ms
var keys = [ 'A♭', 'A', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G' ]
var progressions = [ 'I - IV - V', 'ii - V - I', 'ii - vi - V', 'ii - vi - IV - V' ]

function loopExercice(exercice, speed) {
  setInterval(exercice, speed)
}

function getRandomKey() {
  let index = randUpTo(keys.length)
  return keys[index]
}

function getRandomProgression() {
  let index = randUpTo(progressions.length)
  return progressions[index]
}

function randUpTo(max) { // max excluded
  return Math.floor(Math.random() * max)
}

function randBtw(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
