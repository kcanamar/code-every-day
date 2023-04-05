// Question 7kyu
//////////////////
/*
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/ 
// Solution
//////////////////
function removeSmallest(numbers) {
    let result = []                             // initailize a new array
    let newArray = [...numbers]                 // initialize a shallow copy of the input array
    let count = 0                               // create a memo
    
    newArray.sort((a, b) => a - b)              // sort the copy
    
    for ( let i = 0; i < numbers.length; i++) { // iterate over the input array
      if (numbers[i] === newArray[0]){          // when the current index mathces the smallest index break
        break
      }
      count += 1                                // incremenet the memo
    }
    
    for ( let i = 0; i < numbers.length; i++) { // iterate over the input array
      if (i !== count) {                        // skip over the index matching the counter
        result.push(numbers[i])
      }
    }
    
    return result                               // return the new array
  }

function removeSmallest(numbers) {
    const min = Math.min.apply(null, numbers);                          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}