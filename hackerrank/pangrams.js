//////////////
// Question Pangrams
//////////////
/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

Example:
s = 'The quick brown fox jumps over the lazy dog'
The string contains all letters in the English alphabet, so return pangram.

Function Description:
Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

pangrams has the following parameter(s):
string s: a string to test
Returns
string: either pangram or not pangram

Input Format:
A single line with string s.

Constraints
0 < s.length <= 10**3

Each character of s, s[i] includes {a-z, A-Z, space} 

Sample Inputs;

Sample Input 0
We promptly judged antique ivory buckles for the next prize

Sample Output 0
pangram

Sample Explanation 0
All of the letters of the alphabet are present in the string.

Sample Input 1
We promptly judged antique ivory buckles for the prize

Sample Output 1
not pangram

Sample Explanation 1
The string lacks an x.
*/
//////////////
// Solution
//////////////
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // create a regular expression searching for each letter
    let regex = /([a-z])(?!.*\1)/g;
    // convert string to lowercase to normalize all characters
    // match the regular expression to the input string
    // compare the return length of the regular expression .match() method to the 26 character english alphabet
    // return pangram or not pangram
    return (s.toLowerCase().match(regex).length === 26) ? "pangram" : "not pangram"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
