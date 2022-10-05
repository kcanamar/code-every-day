//////////////////////////
// Question Even or Odd 8kyu
//////////////////////////
/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//////////////////////////
// Solution
//////////////////////////
function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

console.log(even_or_odd(13)) // Odd
console.log(even_or_odd(4)) // Even
console.log(even_or_odd(-17)) // Odd