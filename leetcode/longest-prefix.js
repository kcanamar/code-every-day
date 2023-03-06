// Question
////////////////////
/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
// Solution
////////////////////
/*
 * @param {string[]} strs
 * @return {string}
*/
var longestCommonPrefix = function(strs) {
    // if there are no strings return empty string
    if ( strs.length === 0 ) {
        return ''
    }

    // memo the first string
    const first = strs[0]
    let result = ""
    let prefix = ""

    // iterate over the first string 
    for (let i = 0; i < first.length; i++) {
        // assign the prefix the first chracter of the first string
        prefix += first[i]

        // filter the array of strings by the prefix
        let found = strs.filter((str) => str.startsWith(prefix))

        // check the lengths of the original array of strings to the array with the current prefix applied to each string
        if (found.length === strs.length) {
            
            // if true assign the result to the prefix
            result = prefix
        }
    }

    return result
};