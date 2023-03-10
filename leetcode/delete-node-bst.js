// Question
////////////////////

/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:
Search for a node to remove.
If the node is found, delete the node.

Example 1:
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.

Example 3:
Input: root = [], key = 0
Output: []
 

Constraints:
The number of nodes in the tree is in the range [0, 104].
-105 <= Node.val <= 105
Each node has a unique value.
root is a valid binary search tree.
-105 <= key <= 105
 
Follow up: Could you solve it with time complexity O(height of tree)?
*/ 

// Solution
///////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // check for root
    if(!root) return null

    const traverse = (root, key) => {
        // check for root
        if (!root) return null

        // check if root value is the key
        if (root.val === key) {
            // check for if root has only one child
            if(!root.left) return root.right
            if(!root.right) return root.left

            // declare a replacement
            let replacement = root.right

            // traverse to the end of path
            while (replacement.left) {
                replacement = replacement.left
            }

            replacement.left = root.left

            return root.right
        }

        // check for starting path based on the root.value and key
        if (key < root.val) root.left = traverse(root.left, key)
        if (root.val < key) root.right = traverse(root.right, key)

        return root
    }

    return traverse(root, key)
};