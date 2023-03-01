// Question
///////////////////
/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/

// Solution
///////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // two pointers
    let fast = head
    let slow = head

    // iterate so long fast !== null and fast.next !== null
    while(fast && fast.next) {
        // move slow forward one space
        slow = slow.next
        // move fast forward two spaces
        fast = fast.next.next
    }

    // return the slow pointer
    return slow
};