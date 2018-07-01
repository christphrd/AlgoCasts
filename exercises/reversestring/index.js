// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let reverseStringArr = []
  //
  // str.split("").forEach( char => reverseStringArr.unshift(char))
  // return reverseStringArr.join("")

  return str.split("").reverse().join("")
}

module.exports = reverse;
