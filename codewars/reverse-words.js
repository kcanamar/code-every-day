/////////////////////
// Question Reverse Words 7kyu
/////////////////////
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
/////////////////////
// Solution
/////////////////////
function reverseWords(str) {
    // reverse each word in the string
    // all spaces should be be kept
    let reversedStr = str.split(" ")
    for (let i = 0; i < reversedStr.length; i++) {
        reversedStr[i] = reversedStr[i].split("").reverse().join("")
    }
    return reversedStr.join(" ")
  }

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) // 'ehT kciuq nworb xof spmuj revo eht yzal .god'