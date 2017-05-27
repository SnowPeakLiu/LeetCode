/**
 * Created by 123fl on 27/05/2017.
 */
/**
 * @param {number[]} A
 * @return {number}
 * Beat 26.7%
 */
let sub_slice = function (k) {
    let sum = 0;
    for (let i = 3; i <= k ; i++) {
        sum += k - i + 1;
    }
    return sum;
};
let numberOfArithmeticSlices = function(A) {
    let k = 2;
    let diff = A[1] - A[0];
    let slice = 0;
    for (let i = 2; i < A.length; i++) {
        let diff_new = A[i] - A[i - 1];
        if (diff_new === diff) {
            k++;
        }
        else {
            if (k >= 3) {
                slice += sub_slice(k);
            }
            diff = diff_new;
            k = 2; // A new arithmetic slice is found, so the k should reset.
        }
    }
    if (k >= 3) {
        slice += sub_slice(k);
    }
    return slice;
};

console.log(numberOfArithmeticSlices([1,2,3,8,9,10]));