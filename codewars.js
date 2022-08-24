/* 
    This is the log for all of my code wars questions and answers
*/
///////////////////////
// Question Remove First and Last Character
// Rank 8kyu 
///////////////////////
// Remove First and Last Character 
// Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.
///////////////////////
// Solution
///////////////////////

function removeChar(str) {
    return str.slice(1, -1)
}

///////////////////////
// Question Rank 8kyu
///////////////////////
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
///////////////////////
// Solution
///////////////////////
function simpleMultiplication(number) {
    return number * (number % 2 ? 9 : 8)
}

///////////////////////
// Question Is he gonna survive? 
// Rank  8kyu
///////////////////////
/* 
A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of powerful dragons! 
Each dragon takes *2 bullets* to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets, 
and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/
///////////////////////
// Solution
///////////////////////
function hero(bullets, dragons) {
    // My solution 
    if (bullets === 0 && dragons === 0) return false // this logic passed the test however I conceed this not a very good solution
    let shots = bullets / dragons
    if (shots >= 2) return true
    return false
    // Better Solution
    // return bullets >= dragons * 2
}

///////////////////////
// Question Century From Year 
// Rank 8kyu
///////////////////////
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.
///////////////////////
// Solution
///////////////////////
function century(year) {
    return Math.ceil(year/100)
}

///////////////////////
// Question Convert number to reversed array of digits
// Rank 8kyu
///////////////////////
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

///////////////////////
// Solution
///////////////////////
function digitize(n) {
//   Create an array from the arg n, converting to a string. 
//   Maping each n with the Number constructior { example: Number('1') => 1}
    let arr = Array.from(String(n), Number)
//   Return the new array in reverse order
    return arr.reverse()
}

///////////////////////
// Sample Test
///////////////////////
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(digitize(35231),[1,3,2,5,3]);
//     assert.deepEqual(digitize(0),[0]);
//   });
// });