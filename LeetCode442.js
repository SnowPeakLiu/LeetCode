/**
 * Created by 123fl on 27/05/2017.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== undefined) { // uss '!==' to compare with undefined
            result.push(nums[i]);
        }
        else {
            map.set(nums[i], i);
        }
    }
    let map1 = new Map();
    return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));