/**
 * Created by 123fl on 2017/5/4.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Johnson-Trotter Algorithm
    // Beat 8.33%
var permute = function(nums) {
    let permutation = [];
    let n = nums.length;
    let pi = [], d = [];
    let max = Math.max(...nums);

    nums.sort();
    for (let i = 1; i < n + 1; i ++) {
        pi[i] = nums[i - 1];
        d[i] = -1;
    }
    pi[0] = max + 1;
    pi[n + 1] = max + 1;
    //console.log(pi);
    let set_A = new Set();
    for (let i = 1; i < n ; i++) {
        set_A.add(nums[i]);
    }
    //console.log(set_A);
    let done = false;
    let bibi =1;
    while (!done) {

        permutation.push(pi.slice(1, n + 1));
        if (set_A.size > 0) {
            let m = Math.max(...set_A);
            let j = pi.indexOf(m);
            let d_index = nums.indexOf(m) + 1;
            pi[j] = pi[j + d[d_index]];
            pi[j + d[d_index]] = m;
            //console.log('pi');
            //console.log(pi);
            if (m < pi[j + 2 * d[d_index]]) {
                d[d_index] = -d[d_index];
                set_A.delete(m);
                //console.log('delete m');
            }
            //console.log(set_A);
            for (let i = d_index; i < n; i++) {
                //console.log(max);
                set_A.add(nums[i]);        // not set_A.add(nums[d_index])!!!!!
            }
        }
        else {
            done = true;
        }
    }
    return permutation;
};
permute([1,2,3,4]);