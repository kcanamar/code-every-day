// Question 8kyu
/////////////////////
/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
*/
// Solution
/////////////////////
function switchItUp(number){
  if (number < 0) return "Number is too small"
  if (number > 9) return "Number is too big"
  switch (number){
      case 0:
        return "Zero"
      case 1:
        return "One"
      case 2:
        return "Two"
      case 3:
        return "Three"
      case 4:
        return "Four"
      case 5:
        return "Five"
      case 6:
        return "Six"
      case 7:
        return "Seven"
      case 8:
        return "Eight"
      case 9:
        return "Nine"
  }
}

// function switchItUp(number) {
//   const responses = [
//     "Zero",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine"
//   ]
//   return responses[number]
// }

function switchItUp(number) {
  const responses = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
  }
  return responses[number] ? responses[number] : 'Not a valid input'
}