// Question Merge Intervals
/////////////////////////////////////
// https://leetcode.com/problems/merge-intervals/

// Solution
/////////////////////
var merge = function(intervals) {

    // memo the length of intervals
    // check that intervals length is greater than 2
    if(intervals.length < 2) return intervals

    // sort the intervals based on the zero index
    intervals.sort((a, b) => a[0] - b[0])

    // iterate over intervals 
    for(let i = 1; i < intervals.length; i++){
        // create place holders for current index and previous index
        let current = intervals[i]
        let previous = intervals[i - 1]

        // conditional 
        // if current index 0 is less than or equal previous index 1
        if(current[0] <= previous[1]){
        /* 
            reassign current index to a new array with previous[0] as index 0 
            and the result of Math.max() with arguments previous index 1 and current index 1
        */
        intervals[i] = [previous[0], Math.max(previous[1], current[1])]
        // then remove the previous interval index from the intervals array
        intervals.splice(i - 1, 1)
        // decrement i to reflect the shrinking array
        i--
        }
    }

    // return the intervals array
    return intervals
};