/**
 * Created by lxf on 23/04/2017.
 */
/**
 * @param {string} s
 * @return {string}
 * Beat 69.91%
 */
var reverseString = function(s) {
    var stringLength = s.length;
    var chars = s.split('');
    for (var i = 0; i < stringLength / 2; i++) {
        var t = chars[i];
        chars[i] = chars[stringLength - i - 1];
        chars[stringLength - i - 1] = t;
    }
    return chars.join('');
};
console.log(reverseString('a ba'));