//////////////////////
// Question Sparse Arrays
//////////////////////
// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example
// strings = ["ab", "ab", "abc"]
// queries = ["ab","abc","bc"]

// There are 2 instances of ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, .
// results = [2,1,0]

// Function Description
// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:
// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings

// Returns
// int[q]: an array of results for each query

// Input Format
// The first line contains and integer n, the size of strings[].
// Each of the next n lines contains a string strings[i].
// The next line contains q, the size of queries[].
// Each of the next q lines contains a string queries[i].

// Constraints
// 1 <= n <= 1000
// 1 <= q <= 1000
// 1 <= |strings[i]|,|queries[i]| <= 20

// Sample Input 1
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

// Sample Output 1
// 2
// 1
// 0

// Sample Input 2
// 3
// def
// de
// fgh
// 3
// de
// lmn
// fgh

// Sample Output 2
// 1
// 0
// 1

// Sample Input 3
// 13
// abcde
// sdaklfj
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// na
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// 5
// abcde
// sdaklfj
// asdjf
// na
// basdn

// Sample Output 3
// 1
// 3
// 4
// 3
// 2
//////////////////
// Solution 
//////////////////
/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // create a helper object mathces
    // create an array the same length as queries
    const matches = {};
    const result = Array(queries.length);
    // iterate over strings array
    // increment when multiple instances are found for each possible match
    strings.forEach((str) => {
        if (matches[str]) {
            matches[str]++
        } else {
            matches[str] = 1;
        }
    })
    // iterate over the queries array
    // add frequency of each query to the result array
    queries.forEach((q, index) => {
        if (matches[q]) {
            // compairs the values of the query indcies to the string values in the matches object
            result[index] = matches[q]
        } else {
            //  if no match set index value to 0
            result[index] = 0
        }
    })
    // return the result array
    return result
}