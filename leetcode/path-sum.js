// Question
///////////
/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
 
*/

// Solution
///////////
var hasPathSum = function(root, targetSum) {
    // check to make sure root exists
    if (!root) {
        return false
    }

    // DFS at the root of tree
    // if current node is a leaf and its value is equal to the sum then path is found
    if (root.val === targetSum && root.left === null && root.right === null) {
        return true
    }

    // recursively call to traverse the left and right sub-trees reducing the sum by the root.val on each pass
    // return if any of the two calls are true
    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
        
    )
};