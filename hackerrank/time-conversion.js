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
