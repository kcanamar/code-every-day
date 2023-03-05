// Question
/////////////////
/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

*/
// Solution
//////////////////
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // convert to a string
    // create array of characters
    // reverse it
    // join back into whole string
    // parse the string back to number
    // check for equality
    return x === parseInt(x.toString().split('').reverse().join(''))
};