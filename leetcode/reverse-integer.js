/////////////////////
// Question 7. Reverse Integer
/////////////////////
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 
// Constraints:

// -231 <= x <= 231 - 1
/////////////////////
// Solution
/////////////////////
let reverse = function(x) {
    // check if x is negative
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = -x;
    }
    // create reverse
    let reverse = 0;
    // iterate dividing x by 10 until zero
    while (x > 0) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x / 10);
    }
    // check that reverse is within range
    if (reverse >= Math.pow(2, 31) - 1 || reverse <= Math.pow(-2, 31)) {
        return 0;
    }
    // return with correct sign
    return isNegative ? -reverse : reverse
};