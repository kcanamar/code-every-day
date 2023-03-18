// Questions
//////////////////
/*
Complete the solution so that it strips all text that follows, 
any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"

*/
// Solution
//////////////////
function solution(input, markers) {
    // split the string at each line break  
    let arr = input.split("\n")
    
    // remove the sub strings presented by the markers
    for ( let i =0; i < markers.length ; i++ ) {
      arr = arr.map((element) => {
        let idx = element.indexOf(markers[i])
        if (idx !== -1) {
          return element.substring(0, idx)
        } else {
          return element.replace(/\s*$/,"")
        }
      })
    }
    // put the string back together trimming the whitespace
    return arr.join('\n').trim()
  };