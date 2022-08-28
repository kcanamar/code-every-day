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

///////////////////////
// Question Counting Sheep...
///////////////////////
// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
///////////////////////
// Solution
///////////////////////
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((x) => x === true).length
}
///////////////////////
// Sample Test
///////////////////////
// describe("Tests", () => {
//     it("test", () => {
//   let array1 = [true,  true,  true,  false,
//                 true,  true,  true,  true ,
//                 true,  false, true,  false,
//                 true,  false, false, true ,
//                 true,  true,  true,  true ,
//                 false, false, true,  true ];
              
//   let array2 = [];
//   for (let index = 0; index < 500; index++)
//     array2.push(true);
//   for (let index = 0; index < 5; index++)
//     array2.push(undefined);
//   for (let index = 0; index < 100; index++)
//     array2.push(false);
                
//   let array3 = [];
//   for (let index = 0; index < 500; index++)
//     array3.push(null);
//   for (let index = 0; index < 5; index++)
//     array3.push(undefined);
//   for (let index = 0; index < 100; index++)
//     array3.push(false);
    
//   Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total, not " + countSheeps(array1))
//   Test.assertEquals(countSheeps(array2), 500, "There are 500 sheeps in total, not " + countSheeps(array2))
//   Test.assertEquals(countSheeps(array3), 0, "There are no sheeps at all, you counted " + countSheeps(array3))
//     });
//   });