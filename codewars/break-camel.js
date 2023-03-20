// Question 6kyu
/////////////////
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/
// Solution
/////////////////
function solution(string) {
    let newString = "";
  for(let letter of string){
    if(letter == letter.toUpperCase()){
      newString += " "+letter;
    }else{
      newString += letter;
    }
  }
  return newString;
}