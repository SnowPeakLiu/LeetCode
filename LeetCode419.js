/**
 * Created by lxf on 21/04/2017.
 */
/**
 * @param {character[][]} board
 * @return {number}
 */


/**
 *  AC, beats 31.17%
 *  If a 'X' up and left ([i][j - 1] and [i - 1][j]) slot is '.', this 'X' is a new head of a battleship.
 *  Ohterwise, this 'X' is a part of a battleship.
 */
var countBattleships = function(board) {
    var battleshipsCount = 0;
    var row = board.length;
    var columns = board[0].length;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < columns; j++) {
            if (board[i][j] === 'X'){
                if (i > 0 && j > 0) {
                    if (board[i][j - 1] !== 'X' && board[i - 1][j] !== 'X') {
                        battleshipsCount++;
                    }
                }
                else if (i === 0 && j > 0) {
                    if (board[i][j-1] !== 'X') {
                        battleshipsCount++;
                    }
                }
                else if (i > 0 && j === 0) {
                    if (board[i - 1][j] !== 'X') {
                        battleshipsCount++;
                    }
                }
                else if (i === 0 && j === 0) {
                    battleshipsCount++;
                }
            }
        }
    }
    return battleshipsCount;
};