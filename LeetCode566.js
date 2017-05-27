
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * beat 79%
 */
var matrixReshape = function(nums, r, c) {
    if (r * c !== nums.length * nums[0].length) {
        return nums;
    }
    let reshape = [];
    for (let i = 0; i < r; i++) {
        reshape.push([]);
        for (let j = 0; j < c; j++) {
            reshape[i].push(1);
        }
    }
    let o_r = nums.length;
    let o_c = nums[0].length;
    for (let i = 0; i < o_r; i++) {
        for (let j = 0; j < o_c; j++) {
            reshape[Math.floor( (i * o_c + j) / c)][(i * o_c + j) % c] = nums[i][j]; // make sure what is row and column

        }
    }
    return reshape;
};
