// Question  kyu
////////////////////////
/*
Write a function that tells you when is the next train to Brighton you can take, given the time of day and the minutes it takes you to get to the station.

There is one train every half an hour from 05:00 to 23:30.

The current time is represented by a string in the format "hh:mm". The minutes you need to arrive at the station are also represented by a string.

The result is a string that says "The next train is at hh:mm" (see examples below).

If it's too late for the last train of the day (e.g. it's 23:50 and you need 40 minutes to get to the station), the function returns "The next train is at 05:00.".

EXAMPLES

nextTrain("17:40", "30") => "The next train is at 18:30."
nextTrain("23:20", "25") => "The next train is at 05:00."
nextTrain("03:36", "95") => "The next train is at 05:30."

*/
// Solution 
////////////////////////
function nextTrain(time, minutes){
    // convert hour/min from time to milliseconds
    let hours = time.split(":")[0] * 60 * 60 * 1000
    let min = time.split(":")[1] * 60 * 1000
    // convert minutes to milliseconds
    let travelMin = minutes * 60 * 1000
    // create new Date from hours min and travelMin
    let travelTime = new Date(hours+min+travelMin)
    // reassign hours and min with travelTime
    // Date.prototype.getHours() method returns the hour for the specified date, according to local time
    // Date.prototype.getMinutes() method returns the minutes in the specified date according to local time.
    hours = travelTime.getHours()
    min = travelTime.getMinutes()
    // logic to set next train based on current time
    if (min > 30) {
      // increment hours
      hours++
      // set min to 0 
      min = 0
    } else {
      // else set min to 30
      min = 30
    }
    
    // if time is less then 05:00
    if (hours < 5 ) return "The next train is at 05:00."
    // if time is 23:00 exaclty 
    if (hours == 23 && min == 0) return "The next train is at 23:00."
    // if time is greater than 23:00
    if (hours >= 23 && min >= 0) return "The next train is at 05:00."
    // if time is greater than XX:30 and XX is less than 23 return The next train is at XX:00.
    // .padStart(places, value) padds strings by x number of places with value
    // to make sure that time is in a 0x || 00 format
    return `The next train is at ${hours.toString().padStart(2,0)}:${min.toString().padStart(2,0)}.`
  }