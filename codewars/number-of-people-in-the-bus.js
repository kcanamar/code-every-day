///////////////////////////
// Question Number of People in the Bus 7kyu
///////////////////////////
/* 
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/
///////////////////////////
// Solution
///////////////////////////
function number(busStops){
    // create people counter
    let count = 0;
    // iterate over the outer array
    for (let i = 0; i < busStops.length; i++) {
        // iterate over the inner array 
        for (let j = 0; j < busStops[i].length; j++) {
            // innerArray[0] = the number of people getting on the bus
            if (busStops[i][j] === busStops[i][0]) {
                count += busStops[i][j]
            }
            // innerArray[1] = number of people gettig off the bus 
            if (busStops[i][j] === busStops[i][1]) {
                count -= busStops[i][j]
            }
        }
    }
    // return people after outerArray[outerArray.length - 1]
    return count
}

function number2(busStops){
    // create counter
    let count = 0;
    // iterate over the array
    for (let i = 0; i < busStops.length; i++ ) {
        // increment count based on busStop[i][0]
        count += busStops[i][0]
        // decrement count based on busStop[i][1]
        count -= busStops[i][1]
    }

    return count
}

function number3(busStops){
    // .reduce((previousValue, [currentValue[0], currentValue[1]]) => previousValue + currentValue[0] - currentValue[1], initialValue)
    return busStops.reduce((remaining, [gettingOn, gettingOff]) => remaining + gettingOn - gettingOff, 0)
}

console.log(number([[10,0],[3,5],[5,8]]), "<< should return 5")
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), "<< should return 17")
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), "<< should return 21")
console.log(number([[0,0]]), "<< should be 0")
console.log(number2([[10,0],[3,5],[5,8]]), "<< number2 should return 5")
console.log(number2([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), "<< number2 should return 17")
console.log(number2([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), "<< number2 should return 21")
console.log(number2([[0,0]]), "<< number2 should be 0")
console.log(number3([[10,0],[3,5],[5,8]]), "<< number3 should return 5")
console.log(number3([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), "<< number3 should return 17")
console.log(number3([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), "<< number3 should return 21")
console.log(number3([[0,0]]), "<< number3 should be 0")