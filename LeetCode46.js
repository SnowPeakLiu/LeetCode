/**
 * Created by 123fl on 2017/5/4.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let permutation = [];
    let n = nums.length;
    let pi = [], d = [];
    let max = Math.max(...nums);
    let min = Math.min(...nums);

    for (let i = 1; i < n + 1; i ++) {
        pi[i] = i;
        d[i] = -1;
    }
    pi[0] = n + 1;
    pi[n + 1] = n + 1;
    //console.log(pi);
    let set_A = new Set();
    for (let i = 2; i <= n ; i++) {
        set_A.add(i);
    }
    //console.log(set_A);
    let done = false;
    while (!done) {
        let adjustedPermutation = pi.map(i => (i + min - 1));
        permutation.push(adjustedPermutation.slice(1, n + 1));
        if (set_A.size > 0) {
            let m = Math.max(...set_A);
            let j = pi.indexOf(m);
            pi[j] = pi[j + d[m]];
            pi[j + d[m]] = m;
            //console.log('pi');
            //console.log(pi);
            if (m < pi[j + 2 * d[m]]) {
                d[m] = -d[m];
                set_A.delete(m);
                //console.log('delete m');
            }
            //console.log(set_A);
            for (let i = m + 1; i <= n; i++) {
                //console.log(max);
                set_A.add(i);
            }
        }
        else {
            done = true;
        }
    }
    return permutation;
};
