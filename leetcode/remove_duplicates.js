// Question
/////////////////////////////
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
nums = [0,0,1,1,1,2,2,3,3,4]

// Solution
//////////////////////////

var removeDuplicates = function(nums) {
    // create a memo
    let k = 0
    // itterate over the array
    for (let i = 1, l = nums.length; i < l; i++ ){
        // condtional if current index is the same as the next index
        if(nums[k] != nums[i]) {
            // increment the memo
            k++;
            // move forward 
            nums[k] = nums[i]
        } 
    }
    // add 1 to account for total length of array includes 0
    return k + 1
};

console.log(removeDuplicates(nums), "<< expected 5")