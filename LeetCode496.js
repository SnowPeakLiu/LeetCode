/**
 * Created by lxf on 24/04/2017.
 */
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 * Bear32.30%
 * Try to ues stack and hashMap!
 */
var nextGreaterElement = function(findNums, nums) {
    return findNums.map( num => {
        let result = -1;
        let i = nums.indexOf(num) + 1;
        while (i < nums.length ) {
            if (nums[i] > num) {
                result = nums[i];
                return result;
            }
            i++;
        }
        return result;
    });
};