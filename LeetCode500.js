/**
 * Created by lxf on 22/04/2017.
 */
/**
 * @param {string[]} words
 * @return {string[]}
 * recursion!
 * Beat 67.49%!
 */
var findWords = function(words) {
    var line1 = 'qwertyuiopQWERTYUIOP';
    var line2 = 'asdfghjklASDFGHJKL';
    var line3 = 'zxcvbnmZXCVBNM';
    var i = 0;
    var oneLineWords = [];

    function lineCheck(word) {
        var line = '';
        if (line1.indexOf(word.charAt(0)) !== -1) {
            line = line1;
        }
        else if (line2.indexOf(word.charAt(0)) !== -1) {
            line = line2;
        }
        else {
            line = line3;
        }
        for (var i = 0; i < word.length; i++) {
            if (line.indexOf(word.charAt(i)) === -1) {
                return false;
            }
        }
        return true;
    }
    return words.filter( word => lineCheck(word));
};