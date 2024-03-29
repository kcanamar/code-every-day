// Question
//////////////////
/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

*/
// Solution
//////////////////
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    // iterate while num is positive
    while (num > 0) {
        // if num is even divide by 2 else subtract 1
        // modulo operator returns 0 when even, which evaluates to false
        // modulo operator returns 1 when odd, which evaluates to true
        num % 2 ? num -= 1 : num /= 2
        // increment steps
        steps += 1
    }
    return steps
};