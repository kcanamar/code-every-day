////////////////////
// Question Flipping Bits
////////////////////
/*
You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

Example:
b = base
n = 9b10
9b10 = 1001b2. We're working with 32 bits, so:
00000000000000000000000000001001b2 = 9b10
11111111111111111111111111110110b2 = 4294967286b10

Return 4294967286.

Function Description

Complete the flippingBits function in the editor below.

flippingBits has the following parameter(s):
int n: an integer

Returns
int: the unsigned decimal integer result

Input Format
The first line of the input contains q, the number of queries.
Each of the next q lines contain an integer, n, to process.

Constraints
1 <= q <= 100
0 <= n <= 2^32

Sample Input
3 
2147483647 
1 
0

Sample Output
2147483648 
4294967294 
4294967295

Explanation
Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.
*/
////////////////////
// Solution
////////////////////
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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // declare low with .toString() base 2 to convert to binary
    let low = n.toString(2)
    let high = ''
    
    // pads zeros to the left
    while (low.length < 32) {
        low = 0 + low
    }
    // flip the bits
    for (let i = 0; i < low.length; i ++) {
        high += low[i] === '0' ? '1' : '0'
    }
    // .parseInt() the string to number with base 2 for binary
    return parseInt(high, 2)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
