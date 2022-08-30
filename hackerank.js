/////////////////////
// Question 
/////////////////////
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// Input Format

// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// Constraints



// Output Format

// Print the following  lines, each to  decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros
// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array.
// The proportions of occurrence are positive: , negative:  and zeros: .

/////////////////////
// Solution
/////////////////////

function plusMinus(arr) {
    let p = 0;
    let n = 0;
    let z = 0;
    for( let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            p = p + 1
        } else if (arr[i] < 0) {
            n = n + 1
        } else {
            z = z + 1
        }
    }
    
    console.log(p/arr.length)
    console.log(n/arr.length)
    console.log(z/arr.length)
}

/////////////////////
// Question Mini-Max Sum
/////////////////////
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1+3+5+7 and the maximum sum is 3+5+7+9 . The function prints
// 16 24

// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of 5 integers

// Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

// Input Format

// A single line of five space-separated integers.

// Constraints
// 1 <= arr[i] <=10**9

// Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Explanation
// The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

// Sum everything except 1, the sum is 2 + 3 + 4 + 5 = 14.
// Sum everything except 2, the sum is 1 + 3 + 4 + 5 = 13.
// Sum everything except 3, the sum is 1 + 2 + 4 + 5 = 12.
// Sum everything except 4, the sum is 1 + 2 + 3 + 5 = 11.
// Sum everything except 5, the sum is 1 + 2 + 3 + 4 = 10.
// Hints: Beware of integer overflow! Use 64-bit Integer.
// refactor with .reduce
// Fancy one liner created by Frank Wisniewski 
// console.log(`min: ${arr.sort().slice(0, -1).reduce((a,b)=>a+b)} max:${arr.sort().slice(1).reduce((a,b)=>a+b)}`)
/////////////////////
// Solution
/////////////////////
function miniMaxSum(arr) {
    // Write your code here
    // sort the array
    const sortedArray = arr.sort()
    // define min and max
    let min = 0;
    let max = 0;
    // iterate over sorted array
    for (let i = 0; i < sortedArray.length; i++) {
        // min should include all indecies except the arr[-1]
        if (i < sortedArray.length - 1) {
            min += sortedArray[i]
        }
        // max should include all indecies except arr[0]
        if (i > 0) {
            max += sortedArray[i]
        }
    }
    console.log(min, max)
}

/////////////////////
// Question Time Conversion
/////////////////////
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// string s: a time in 12 hour format
// Returns
// string: the time in 24 hour format

// Input Format
// A single string  that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

// Constraints
// All input times are valid
// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45
/////////////////////
// Solution
/////////////////////
function timeConversion(s) {
    let time = s.charAt(8);
    let military = "";
    if (time === "A") {
        if(s.substring(0,2) == "12") {
            military = "00"
        }
        else {
            military = s.substring(0,2);
        }
    }
    else {
        if(s.substring(0,2) == "12") {
            military = s.substring(0,2)
        }
        else {
            military = parseInt(s.substring(0,2), 10) + 12
        }
    }
    return military + s.substring(2,8)
}

/////////////////////
// Question Breaking the Records
/////////////////////
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// Example
// scores = [12, 24, 10, 24]
// Scores are in the same order as the games played. She tabulates her results as follows:

//                                      Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// Function Description

// Complete the breakingRecords function in the editor below.

// breakingRecords has the following parameter(s):

// int scores[n]: points scored per game
// Returns

// int[2]: An array with the numbers of times she broke her records. Index [0] is for breaking most points records, and index [1] is for breaking least points records.
// Input Format

// The first line contains an integer n, the number of games.
// The second line contains n space-separated integers describing the respective values of scores[0], scores[1],..., scores[n-1]

// Constraints
// 1 <= n <= 1000
// 0 <= scores[i] <= 10**8

/////////////////////
// Solution
/////////////////////
/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let bestScore = scores[0];
    let worstScore = scores[0];
    let best = 0;
    let worst = 0;
    for (let i = 0; i < scores.length; i ++){
        if (scores[i] > bestScore){
            bestScore = scores[i];
            best++;
            continue;
        }
        if (scores[i] < worstScore){
            worstScore = scores[i];
            worst++;
            continue;
        }
    }
    return [best, worst]
}