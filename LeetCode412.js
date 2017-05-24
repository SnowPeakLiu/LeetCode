/**
 * Created by lxf on 23/04/2017.
 */
/**
 * @param {number} n
 * @return {string[]}
 * Beat 68.11%
 */
var fizzBuzz = function(n) {
    var zz = [];
    for (var i = 0; i < n; i++) {
        var z = i + 1;
        if (z % 3 !== 0 && z % 5 !== 0) { // z is not ending with *zz
            zz.push(String(z));
        } else if (z % 3 === 0 && z % 5 !== 0) { //Fizz
            zz.push('Fizz');
        } else if (z % 3 !== 0 && z % 5 === 0) { // Buzz
            zz.push(('Buzz'));
        } else { //FizzBizz
            zz.push('FizzBuzz');
        }
    }
    return zz;
};