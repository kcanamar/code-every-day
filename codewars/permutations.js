// Question 4kyu
///////////////////
/*
    In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

    Create as many "shufflings" as you can!

    Examples:

    With input 'a':
    Your function should return: ['a']

    With input 'ab':
    Your function should return ['ab', 'ba']

    With input 'abc':
    Your function should return ['abc','acb','bac','bca','cab','cba']

    With input 'aabb':
    Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
    Note: The order of the permutations doesn't matter.

    Good luck!
*/
// Solution
///////////////////

function permutations(string){
      if (!string || typeof string !== "string") {
        return "Please use a string"
      } else if (string.length < 2) {
        return [string]
      }

      let result = []
    
      for (let i = 0; i < string.length; i++) {
        // get the current character
        let curr = string[i]

        if (string.indexOf(curr) != i)
        continue

        // get the remaining chracters
        let remaining = string.slice(0, i) + string.slice(i + 1, string.length)

        // call permutations recusivly 
        for ( let per of permutations(remaining)) {
          result.push(curr + per)
        }
      }
      return result
    }