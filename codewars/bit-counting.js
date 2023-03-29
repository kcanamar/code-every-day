// Question 6kyu
///////////////////
/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case (how many "1"s)
*/ 
// Solution
///////////////////
var countBits = function(n) {
    // convert the integer to binary
    const binary = n.toString(2)
    let count = 0

    // iterate over the binary string counting each instance of 1
    for (let one of binary) {
      if (one === "1") count += 1
    }
    return count
  };