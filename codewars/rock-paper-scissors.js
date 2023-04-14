// Question 8kyu
////////////////////
/*
  Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
// Solution
////////////////////
const rps = (p1, p2) => {

  if (p1 === p2) return "Draw!"

  const choices = { paper:"rock", scissors:"paper", rock:"scissors"}
  
  return (p2 === choices[p1]) ? "Player 1 won!" : "Player 2 won!"
};