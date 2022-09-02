/////////////////////
// Question Camel Case 4
/////////////////////
// Camel Case is a naming style common in many programming languages. In Java, method and str names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case str, method, and class names.

// Input Format

// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be S (split) or C (combine)
// M indicates method, C indicates class, and V indicates str
// In the case of a split operation, the words will be a camel case method, class or str name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from str names.
// Output Format

// For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
// Sample Input

// S;M;plasticCup()

// C;V;mobile phone

// C;C;coffee machine

// S;C;LargeSoftwareBook

// C;M;white sheet of paper

// S;V;pictureFrame

// Sample Output

// plastic cup

// mobilePhone

// CoffeeMachine

// large software book

// whiteSheetOfPaper()

// picture frame

// Explanation

// Use Scanner to read in all information as if it were coming from the keyboard.

// Print all information to the console using standard output (System.out.print() or System.out.println()).

// Outputs must be exact (exact spaces and casing).
/////////////////////
// Solution
/////////////////////
function processData(input) { 
    let inputArray = input.split("\r\n"); 
    for(const i of inputArray){ 
        const getInput = i.split(";"); 
        if(getInput[0] === 'S' && getInput[1] === 'M'){ 
            const str = getInput[2].slice(0, getInput[2].length - 2); 
            const arr = str.split(""); 
            const outPutArray = []; 
            for(const i of arr){ 
                if(i === i.toUpperCase()){ outPutArray.push(" "); 
                outPutArray.push(i.toLowerCase()); 
                }else{ 
                    outPutArray.push(i); 
                } 
            } 
            let outputText = ""; 
            for(const i of outPutArray){ 
                outputText = outputText+i; 
            } 
            console.log(outputText) 
        } else if(getInput[0] === 'C' && getInput[1] === 'V'){
             const arr = getInput[2].split(" "); 
             const outPutArray = []; 
             for(const i of arr){ 
                if(i === arr[0]){ 
                    outPutArray.push(i.toLowerCase()); 
                }else{ 
                    outPutArray.push(i[0].toUpperCase()+i.slice(1, i.length)); 
                } 
            } 
            console.log(outPutArray.join("")) 
        } else if(getInput[0] === 'C' && getInput[1] === 'C'){ 
            const arr = getInput[2].split(" "); 
            const outPutArray = []; 
            for(const i of arr){ outPutArray.push(i[0].toUpperCase()+i.slice(1, i.length)); 
            } 
            console.log(outPutArray.join("")) 
        } else if(getInput[0] === 'S' && getInput[1] === 'C'){ 
            const str = getInput[2]; 
            const arr = str.split(""); 
            const outPutArray = []; 
            for(const i of arr){ 
                if(i === arr[0]){ 
                    if(i === i.toUpperCase()){ 
                        outPutArray.push(i.toLowerCase()); 
                    }else{ 
                        outPutArray.push(i); 
                    } 
                }else{ 
                    if(i === i.toUpperCase()){ 
                        outPutArray.push(" "); 
                        outPutArray.push(i.toLowerCase()); 
                    }else{ 
                        outPutArray.push(i); 
                    } 
                } 
            } 
            console.log(outPutArray.join("")) 
        } else if(getInput[0] === 'C' && getInput[1] === 'M'){ 
            const arr = getInput[2].split(" "); 
            const outPutArray = []; 
            for(const i of arr){ 
                if(i === arr[0]){ 
                    outPutArray.push(i.toLowerCase()); 
                }else{ 
                    outPutArray.push(i[0].toUpperCase()+i.slice(1, i.length)); 
                } 
            } 
            console.log(outPutArray.join("")+"()") 
        } else if(getInput[0] === 'S' && getInput[1] === 'V'){ 
            const str = getInput[2]; 
            const arr = str.split(""); 
            const outPutArray = []; 
            for(const i of arr){ 
                if(i === i.toUpperCase()){ 
                    outPutArray.push(" "); 
                    outPutArray.push(i.toLowerCase()); 
                }else{ 
                    outPutArray.push(i); 
                } 
            } 
            let outputText = ""; 
            for(const i of outPutArray){ 
                outputText = outputText+i; 
            } 
            console.log(outputText) 
        }else{ 
            console.log("nothing") 
        } 
    } 
}