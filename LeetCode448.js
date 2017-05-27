/**
 * Created by 123fl on 27/05/2017.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 * Beat 76%
 */
var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    return nums.reduce((result, num, index) = > {
        if (num > 0){
            result.push(index + 1);
        }
        return result;    //return result for next num ??? how to explain
    }, []);
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));