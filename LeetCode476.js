/**
 * @param {number} num
 * @return {number}
 */
//476. Number Complement
var findComplement = function(num) {
    var numString = (num).toString(2);
    var numBits = numString.split('');
    var numBitsCom = numBits.map(char => 1 - char);
    var startingWithOne = numBitsCom.slice(numBitsCom.indexOf(1));
    return parseInt(startingWithOne.join(''), 2);
};