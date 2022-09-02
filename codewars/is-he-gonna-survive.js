///////////////////////
// Question Is he gonna survive? 
// Rank  8kyu
///////////////////////
/* 
A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of powerful dragons! 
Each dragon takes *2 bullets* to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets, 
and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/
///////////////////////
// Solution
///////////////////////
function hero(bullets, dragons) {
    // My solution 
    if (bullets === 0 && dragons === 0) return false // this logic passed the test however I conceed this not a very good solution
    let shots = bullets / dragons
    if (shots >= 2) return true
    return false
    // Better Solution
    // return bullets >= dragons * 2
}
