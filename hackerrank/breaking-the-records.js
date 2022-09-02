/////////////////////
// Question Breaking the Records
/////////////////////
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// Example
// scores = [12, 24, 10, 24]
// Scores are in the same order as the games played. She tabulates her results as follows:

//                                      Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// Function Description

// Complete the breakingRecords function in the editor below.

// breakingRecords has the following parameter(s):

// int scores[n]: points scored per game
// Returns

// int[2]: An array with the numbers of times she broke her records. Index [0] is for breaking most points records, and index [1] is for breaking least points records.
// Input Format

// The first line contains an integer n, the number of games.
// The second line contains n space-separated integers describing the respective values of scores[0], scores[1],..., scores[n-1]

// Constraints
// 1 <= n <= 1000
// 0 <= scores[i] <= 10**8

/////////////////////
// Solution
/////////////////////
/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let bestScore = scores[0];
    let worstScore = scores[0];
    let best = 0;
    let worst = 0;
    for (let i = 0; i < scores.length; i ++){
        if (scores[i] > bestScore){
            bestScore = scores[i];
            best++;
            continue;
        }
        if (scores[i] < worstScore){
            worstScore = scores[i];
            worst++;
            continue;
        }
    }
    return [best, worst]
}