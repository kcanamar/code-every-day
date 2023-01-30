let arr1 = [1, 2, 3, 3, 3, 3, 4, 5]

let arr2 = [1, 1, 1, 1, 2, 3, 4, 7, 8, 9]

// Take two arrays and add them together without any duplicates

function addTwoArrays(first, second) {
    
    // decalre results variable
    // this creates a memo
    let result = []

    // Iterate over first array
    for (let i = 0; i < first.length; i++) {

        //  compare current index against the result array
        // if current is not present in results push current
        if (result.indexOf(first[i]) === -1) {
            result.push(first[i])
        }
    }

    for (let i = 0; i < second.length; i++) {

        //  compare current index against the result array
        // if current is not present in results push current
        if (result.indexOf(second[i]) === -1) {
            result.push(second[i])
        }
    }

    return result.reduce((a,b) => a + b, 0)
}


console.log(addTwoArrays(arr1, arr2), "<< expected [1, 2, 3, 4, 5, 7, 8, 9]")
console.log(1 + 2 + 3 + 4 + 5 + 7 + 8 + 9)
console.log(addTwoArrays2(arr1, arr2), "<< expected [1, 2, 3, 4, 5, 7, 8, 9]")


