/**
 * Created by 123fl on 27/05/2017.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * beat 9%
 */
var findMaxConsecutiveOnes = function(nums) {
    let string = nums.join('');
    let strArray = string.split('0');
    let max = strArray[0].length;
    for (let i = 1; i < strArray.length; i++) {
        if (strArray[i].length > max) {
            max = strArray[i].length;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,0,0,1,1,1,1,0,1]));