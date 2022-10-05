///////////////////////
// Question Detect Pangram 6kyu
///////////////////////
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
///////////////////////
// Solution
///////////////////////
function isPangram(string){
    // stadarize the string to lowercase
    // .match() retireves the result of a matching string against a regular expression
    // ([a-z]) matches a single instance of each letter betwwen a and z
    // (?! ) marks a negative lookahead starting at the current position in the expression,
    // ensures that the given pattern will not match.
    // . matches any character (except for line terminators)
    // * matches the previous token between zero and unlimited times, as many times as possible (greedy)
    // \1 matches the same text as most recently matched by the 1st capturing group
    // comapre the length of the match to the 26 character english alphabet
    return (string.toLowerCase().match(/([a-z])(?!.*\1)/g).length === 26) ? true : false
  }