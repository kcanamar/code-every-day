// Question
/////////////////
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
// Solution
/////////////////
function pigIt(str){
  
    // split string by spaces
    let arr = str.split(" "),
        result = []
    
    // iterate over each word
    for (let i = 0; i < arr.length; i++) {
      // split each word by letter   
      let word = arr[i].split("") 
      word.push(word.shift(), "a", "y")
      
      // Exclude Punctuation     
      if ( arr[i] === "?" || arr[i] === "!" || arr[i] === ".") {
        result.push(arr[i])
      } else {
        result.push(word.join(""))
        
      }
    }
    
    return result.join(" ")
}