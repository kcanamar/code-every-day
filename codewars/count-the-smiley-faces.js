/////////////////////////
// Question Count the Smiley Faces 6kyu
/////////////////////////
/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/
/////////////////////////
// Solution
/////////////////////////
// Regex 
function countSmileys(arr) {
    // create regular expression for each part of smiley face
    // lets break down the expression
    // (?:...) says to match everything enclosed
    // first non-catputre group (?::|;) we can match : or ;
    // second non-capture group (?:~|-) we can match ~ or -
    // last non-capture group (?:\)|D) 
    // we have to first escape this group inorder to use the ) as first option 
    // this will either match ) or D
    let regex = /((?::|;)(?:~|-)?(?:\)|D))/g
    // create a variable to store the matching smiley faces 
    let count = arr.join("").match(regex) 
    // reutrn the length of the array with the matching instances
    return count ? count.length : 0
}
// Non Regex
function countSmileys(arr) {
    // create a counter
    let count = 0
    // iterate over the array
    for (let i = 0; i < arr.length; i++){
        // create a variable of the current index
        let test = arr[i]
        // logic check if variable is 2 characters
        if (test.length === 2){
            if (
                ( test.charAt(0) === ":" || test.charAt(0) === ";" ) &&
                ( test.charAt(1) === ")" || test.charAt(1) === "D" )
               ) { count += 1 }
        }
        // logic check if variable is 3 characters
        if (test.length === 3){
            if (
                ( test.charAt(0) === ":" || test.charAt(0) === ";" ) && 
                ( test.charAt(1) === "-" || test.charAt(1) === "~" ) && 
                ( test.charAt(2) === ")" || test.charAt(2) === "D")
                ) { count += 1 }
        }
        // logic check arr.length
        if (arr.length === 0) count = 0
    }

    return count
}

