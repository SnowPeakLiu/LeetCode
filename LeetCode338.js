/**
 * Created by lxf on 21/04/2017.
 */

/**
 * 338. Counting Bits
 * @param {number} num
 * @return {number[]}
 * AC beat 64.24%
 * 0 1 12 1223
 * 0 1+0 1+(01) 1+(0112)
 *
 */
var countBits = function(num) {
    var ones = [0];
    if (num === 0) {
        return ones;
    }
    var twoSquare = 1;
    while (num >= twoSquare) {
        for (var i = 0; i < twoSquare && num >= (twoSquare + i); i++) {
            ones.push(ones[i] + 1);
        }
        twoSquare *= 2;
    }
    return ones;
};