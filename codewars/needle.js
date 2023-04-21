// Question 8kyu
/////////////////////
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
*/
// Solution
/////////////////////
function findNeedle(haystack) {
  //   Loop Approach:
  //   for (let i = 0; i < haystack.length; i++) {
  //     if (haystack[i] === "needle") return `found the needle at position ${i}`
  //   }
  
  //   .indexOf Approach
    return `found the needle at position ${haystack.indexOf('needle')}`
    
  //   .entries Approach
  //   for (let [index, element] of haystack.entries()) {
  //     if (element === "needle") return `found the needle at position ${index}`
  //   }
    
  //   .find Approach
  //   let position;
  //   haystack.find((value, index) => {
  //     if (value === 'needle') position = index
  //   })
  //   return `found the needle at position ${position}`
    
  }