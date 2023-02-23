// Quesiton
////////////////
/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/
// Solution
////////////////
var groupAnagrams = function(strs) {
    // Create a hash to store values 
    let hash = {}
    // iterate over the strs array
    strs.forEach(str => {
        // create a variable for each word that has been alphabetized
        let word = str.split("").sort()
        // add the word to the correct key if all letters match else create a new array
        hash[word] ? hash[word].push(str) : hash[word] = [str]
    })
    // return the values of the hash
    return Object.values(hash)
};