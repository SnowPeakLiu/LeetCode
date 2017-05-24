/**
 * Created by lxf on 25/04/2017.
 */
/**
 * @param {number} n
 * @return {boolean}
 *
 * In general, I have three chooses (taking 1, 2 or 3 stones), if one or more choose can make my friend lose the game
 * then I win.
 * Recursion solution is easy to implicate. How about tail call and iteration.
 * Recursion solution is runtime error when input is large enough.
 * Even recursion with storing previous results is time limit exceeded.
 * 1 2 3 4* 5 6 7 8* 9 10 11 12*
 * previous three subconditions are all true means how many stones I remove, my friend will win.
 * The loop is based on 4.
 */
var canWinNim = function(n) {
    return n % 4 === 0 ? false : true;
};

