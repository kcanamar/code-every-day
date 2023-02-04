// Question
//////////////////////////
/*
Create a function that takes in an array of objects where each object has a route, time and cost property. 
This function returns an array. 
Every object in the returned array should have a unique route property and totalTime, and totalCost property. 
The totalTime and totalCost property are a summation of each route’s time and cost in the arguement.

[
    {time: 1.5, cost: 3, route: 100},
    {time: 1.5, cost: 4, route: 200},
    {time: 5.5, cost: 5, route: 300},
    {time: 3.5, cost: 6, route: 100},
    {time: 2.5, cost: 7, route: 200},
]
should return

[
    { route: 100, totalTime: 5, totalCost: 9},
    { route: 200, totalTime: 4, totalCost: 11},
    { route: 300, totalTime: 5.5, totalCost: 5},
]
*/

// Solution
/////////////////////////////
var data = [
    {time: 1.5, cost: 3, route: 100}, 
    {time: 1.5, cost: 4, route: 200}, 
    {time: 5.5, cost: 5, route: 300}, 
    {time: 3.5, cost: 6, route: 100},
    {time: 2.5, cost: 7, route: 200},
  ];
  // pass a parameter of array of objs
  function summation(arr) {
    // obj {route, time, cost}
    // in the returned array the new obj {route, totalTime, totalCost}

    // create a variable for all routes removing duplicates
    const routes = [...new Set(data.map((element) => element.route))]
    // create results array from the routes array filtering the data array based on route number
    const results = routes.map((route) => {
      let filteredData = data.filter((element) => element.route === route)
      return combinedData = helper(filteredData)
    })
    // use map as it returns and array 
    // let route100 = 
    // let route200 = data.filter((element) => element.route === 200)
    // let route300 = data.filter((element) => element.route === 300)
    // console.log(route100)  
    // helper function to sum time and cost
    function helper(arr2) {
      // create and obj
      let obj = {
        route: 0,
        totalTime: 0,
        totalCost: 0
      }
      // iterate over the arr adding the parts of the objects to the time, cost
      for (let i = 0, l = arr2.length; i < l; i++){
        obj.route = arr2[i].route
        obj.totalTime += arr2[i].time
        obj.totalCost += arr2[i].cost
      }
      return obj 
    }
  
    // new resultArr made up of obj
    // let result = [helper(route100), helper(route200), helper(route300)]
  
    return results
  }
  
  let expected = [
    { route: 100, totalTime: 5, totalCost: 9},
    { route: 200, totalTime: 4, totalCost: 11},
    { route: 300, totalTime: 5.5, totalCost: 5},
  ]
  
  
  console.log(summation(data), expected)