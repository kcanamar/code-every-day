// Question
////////////////////
/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
Return the kth positive integer that is missing from this array.

Example 1:
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
*/
// Solution
////////////////////
/*
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
*/
var findKthPositive = function(arr, k) {
    // create a counter
    let missing = 0

    // iterate until counter equals k
    for (let i = 1; missing !== k; i++) {

        // check if array includes i 
        // if true move on, if false increment missing
        if (!arr.includes(i)) missing += 1
        
        // break loop when missing counter = k 
        if (missing === k) return i 
    }
};