//
//  Key Generator
//

var speed = 3000 //ms
var keys = [ 'A♭', 'A', 'B♭', 'B', 'C♭', 'C', 'C♯', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G' ]

setInterval(function() {
  let index = randUpTo(keys.length)
  console.log(keys[index])
}, speed)

function randUpTo(max) {
  return Math.floor(Math.random() * max)
}
