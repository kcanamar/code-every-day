//////////////////////
// Question 
//////////////////////
// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Example 1:
//            1
//         /  |  \
//        3   2   4
//      /   \
//     5     6
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]

// Constraints:

// The height of the n-ary tree is less than or equal to 1000
// The total number of nodes is between [0, 104]
//////////////////////
// Solution
//////////////////////
/**
 * Definition for a Node.
 * ///////////////////////
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    // check to make sure root is truthy
    if(!root) return [];
    // initialize q array populated with root
    // initialize result array
    const q = [root];
    const result = [];
    
    while(q.length) {
        // save the length of q
        let len = q.length;
        result.push(q.map(node => node.val));
        
        while(len--) {
            let node = q.shift();
            // iterate through each node 
            // add each nodes children to the q array
            for (let child of node.children) {
                q.push(child);
            }
        }
    }
    
    return result
};