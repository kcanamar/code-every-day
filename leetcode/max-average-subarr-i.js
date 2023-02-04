// Question Merge Intervals
/////////////////////////////////////
// https://leetcode.com/problems/maximum-average-subarray-i/description/

// Solution
/////////////////////
var findMaxAverage = function(nums, k) {
    // create current sum of window
    let currSum = 0;
    // create the first window
    for (let i = 0; i < k; i++) {
        // add current index to sum of window
        currSum += nums[i];
    }
    // create max sum from first window sum
    let maxSum = currSum;
    
    for (let i = k; i < nums.length; i++) {
        // add the next number from the array 
        // subtract the previous number from the array
        currSum += nums[i] - nums[i - k];
        // reasign max sum to wich is greater current or max
        maxSum = Math.max(currSum, maxSum);
    }
    // return the average based on window size
    return maxSum / k;
};