// Question
//////////////////////
/*
Given the root of a binary tree, invert the tree, and return its root.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/
// Solution
//////////////////////
var invertTree = function(root) {
    // establish base case
    if (!root || !root.left && !root.right) {
        return root
    }

    // go left
    const prevLeft = root.left;
    // reasign current left and right
    root.left = root.right
    root.right = prevLeft
    // call recursivly to traverse the tree unitl base case if returned
    invertTree(root.left)
    invertTree(root.right)
    // reutrn the root
    return root
};