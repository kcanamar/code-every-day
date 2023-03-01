// Question
///////////////////
/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 
*/
// Solution
///////////////////
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const noteArr = ransomNote.split('');
    const magArr = magazine.split('');

    const result = noteArr.every((letter) => {
        // check if letter is present in the magazine array
        const letterIdx = magArr.indexOf(letter); 
        // coditional
        if (letterIdx > -1) {
            // remove the word from the magazine array
            magArr.splice(letterIdx, 1)
            return true
        }
    })

    return result
};