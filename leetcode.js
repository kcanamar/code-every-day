/////////////////////
// Question 1. Two Sum
/////////////////////
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
// Hash Table
/////////////////////
// Solution
/////////////////////
// Brute Force O(n**2)
////////////////////
let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if( nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

// Hash Table O(n)
///////////////////////
// let twoSum = function(nums, target) {
//     const idxS = new Map();

//     for (let idx = 0; idx < nums.length; idx++) {
//         const y = target - nums[idx]

//         if (idxS.has(y)) {
//             return [idxS.get(y), idx]
//         }

//         idxS.set(nums[idx], idx)
//     }
// }
/////////////////////
// Question 27. Remove Element
/////////////////////
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 
// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100
/////////////////////
// Solution
/////////////////////
var removeElement = function(nums, val) {
     let count = 0;
     for (let i = 0; i< nums.length; i++) {
         if (nums[i] !== val) {
             nums[count++] = nums[i];
         }
     }
     return count;
};

/////////////////////
// Question Build Array from Permutation
/////////////////////
// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

 

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] < nums.length
// The elements in nums are distinct.
 

// Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?
/////////////////////
// Solution
/////////////////////
var buildArray = function(nums) {
    // create ans array
    let ans = [];
    // iterate over nums 
    for (let i = 0; i < nums.length; i++){
        // build ans
        ans.push(nums[nums[i]])
    }
    return ans
};

// Euclidean Division solution for a space complexity of O(1) 
// - https://en.wikipedia.org/wiki/Euclidean_division 
// - https://www.youtube.com/watch?v=7KLyGdPy7ns
// - https://leetcode.com/problems/build-array-from-permutation/discuss/2294854/JavaScript-Space-O(1)-Euclidean-division
/////////////////////
// const buildArray = (nums) => {
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         nums[i] = nums[i] + (len * (nums[nums[i]] % len)); 
//     }
    
//     for (let i = 0; i < len; i++) {
//         nums[i] = Math.floor(nums[i] / len);
//     }
    
//     return nums;
// }