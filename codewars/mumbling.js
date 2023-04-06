// Question 7kyu
//////////////////
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
// Solution
//////////////////
function accum(s) {
    const result = []
    const lowerCase = s.toLowerCase()
    
    for ( let i = 0; i < lowerCase.length; i++) {
      let string = lowerCase[i].toUpperCase()
      for ( let j = 0; j < i; j++) {
        string += lowerCase[i]
      }
      result.push(string)
    }
    
    return result.join("-")
  }