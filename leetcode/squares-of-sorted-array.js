// Question Squares of a Sorted Array
/////////////////////////////////////
// https://leetcode.com/problems/squares-of-a-sorted-array/

// Solution
/////////////////////
// first solution
var sortedSquares = function(nums) {
    // map over the aray multplying each index by itself
    // then sort array in non-decreasing order
    return nums.map((a) => a * a).sort((a, b) => a - b)
};

// second solution
var sortedSquares = function(nums) {
    // constant for the length of nums array
    const l = nums.length;
    // new array based on the length of nums and fill with 0 for each index
    let arrSq = Array(l).fill(0);
    // variable of the highest squared index
    let high = l - 1;
    // start and end pointer
    let start = 0;
    let end = l - 1;
    // iterate of the nums array
    while( start <= end ) {
        // start pointer
        let startSq = Math.pow(nums[start], 2);
        // end pointer
        let endSq = Math.pow(nums[end], 2);

        // conditional to sort the the arrray based on startSq and endSq
        if(startSq > endSq) {
            // reassign the highest index with start square
            arrSq[high] = startSq;
            // increment the start pointer 
            start += 1;
        } else {
            // reassign the highest index with end square
            arrSq[high] = endSq;
            // decrement the end pointer
            end -= 1;
        };
        // decremenet high index 
        high -= 1;

    };
    return arrSq;
};