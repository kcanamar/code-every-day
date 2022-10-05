/////////////////////
// Question Sum Arrays 8kyu
/////////////////////
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/
/////////////////////
// Solution
/////////////////////
function sum (numbers) {
    "use strict";
    return (numbers.length <= 0) ? 0 : numbers.reduce((a,b) => a + b, 0)
};

console.log(sum([1,4,5.1,6,7.5,8,0])) // 31.6
console.log(sum([-2,-4,-6.4,1,2,3.8,4])) // -1.6
console.log(sum([])) // 0