/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
}

//console.log(coinFlip())

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  var output = [];
  for (let i = 0; i < flips; i++) {
    output.push(coinFlip())
  }
  return output;
}
//console.log(coinFlips(5))
/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  let countArray = [];
  let headsCount = 0;
  let tailsCount = 0;
  var o = new Object();
  array.forEach(function(item) {
    if (item == "heads") {
      headsCount += 1;
    }
    if (item == "tails") {
      tailsCount += 1;
    }
  });
  if (headsCount == 0) {
    o = {tails: tailsCount}
  }
  else if (tailsCount == 0) {
    o = {heads: headsCount}
  }
  else {
    o = {heads: headsCount, tails: tailsCount}
  }
  return o;
}
//console.log(countFlips(coinFlips(10)))

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let result = "";
  let flip = (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
  if (flip == call) {
    result = "win"
  }
  else {
    result = "lose"
  }
  let o = {call: call, flip: flip, result: result}
  return o;
}
//console.log(flipACoin('tails'))

/** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip, coinFlips, countFlips, flipACoin};