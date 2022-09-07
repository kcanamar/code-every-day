/////////////////
// Question Shortest Word 7kyu
/////////////////
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
/////////////////
// Solution
/////////////////
function findShort(s){
    let shortest = 0;
    for (let word of s.split(" ")) {
      if (shortest === 0 || word.length < shortest){
        shortest = word.length
      }
    }
    return shortest
  }