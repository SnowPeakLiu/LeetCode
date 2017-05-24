/**
 * Created by lxf on 24/04/2017.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * DFS
 * If all of 1 units are isolated, the perimeter is 4 times of the number if 1 units.
 * And two abjected 1 units reduce 2 perimeter.
 * So the perimeter is sizeOfOneUnits * 4 - (sizeOfOneUnit - 2 * abjected edges)
 * When use BFS or DFS, the abjected edges is easy to counted.
 * WHen the 1 units has been tracked, the number is modified to
 *
 * Beat 58.63% not a good result!
 */
let islandPerimeter = function(grid) {

    let i = 0;
    let j = 0;
    let m = grid.length;
    let n = grid[0].length;
    let numsOfCommonEdges = 0;
    let numsOfLandUnits = 0;
    for (i = 0; i < m; i++) {

        for (j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                break;
            }
        }
        if (grid[i][j]){   // need double break, and check condition before break cause;
            break;
        }
    }

    function track(x, y) {
        numsOfLandUnits++;
        let upWaterOrTracked = false;
        let leftWaterOrTracked = false;
        let downWaterOrTracked = false;
        let rightWaterOrTracked = false;
        grid[x][y] = 2;

        if (x - 1 >= 0 && grid[x - 1][y] === 2) { // when tracks the unit of number 2, it means we touch the common edge.
            numsOfCommonEdges++;
        }

        if (y - 1 >= 0 && grid[x][y - 1] === 2) {
            numsOfCommonEdges++;
        }

        if (x + 1 <= m - 1 && grid[x + 1][y] === 2) {
            numsOfCommonEdges++;
        }

        if (y + 1 <= n - 1 && grid[x][y + 1] === 2) {
            numsOfCommonEdges++;
        }

        if (x === 0 || grid[x - 1][y] !== 1) {
            upWaterOrTracked = true;
        } else {
            track(x - 1, y);
        }
        if (y === 0 || grid[x][y - 1] !== 1) {
            leftWaterOrTracked = true;
        } else {
            track(x, y - 1);
        }
        if (x === m - 1 || grid[x + 1][y] !== 1) {
            downWaterOrTracked = true;
        } else {
            track(x + 1, y);
        }
        if (y === n - 1 || grid[x][y + 1] !== 1){
            rightWaterOrTracked = true;
        } else {
            track(x, y + 1);
        }
        if (upWaterOrTracked && leftWaterOrTracked && downWaterOrTracked && rightWaterOrTracked) {
            return true;        // this is like a leaf in the tree or all of the children have been tracked.
        }
    }
    track(i, j);
    let perimeter = numsOfLandUnits * 4 - numsOfCommonEdges * 2;
    return perimeter;
};
