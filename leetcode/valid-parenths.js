// Question
////////////////////
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 
*/
// Solution
////////////////////
/*
 * @param {string} s
 * @return {boolean}
*/
var isValid = function(s) {
    // create a stack and hash for possibilities
    const stack = []
    const hash = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    // iterate over each character in string
    for (let i = 0; i < s.length; i++) {

        // compair the current character to the keys of the hash 
        if (!hash[s[i]]){

            // push the open symbol to the stack
            stack.push(s[i])
        } 

        // compare the current character to the stack 
        else if (stack.pop() !== hash[s[i]]) {
            
            // if the values are not the same type return false
            return false
        }
    }

    // check to make sure the stack is empty and return the result
    return stack.length === 0
};