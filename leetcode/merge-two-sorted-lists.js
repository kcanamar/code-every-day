// Question
////////////////////
/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/
// Solution
////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/
var mergeTwoLists = function(list1, list2) {
    // create a new linked list
    let list3 = new ListNode(0)

    // previous pointer
    let previous = list3

    // iterate over each lists until one is empty
    while (list1 != null && list2 != null) {

        // compare the head of each list
        if (list1.val < list2.val) {

            // if true assign pointer value of list1 head
            previous.next = list1

            // then move list1 to next node
            list1 = list1.next
        } else {

            // if false assign pointer value of list2 head
            previous.next = list2

            // then move list2 to next node
            list2 = list2.next

        }

        // move the pointer forward
        previous = previous.next
    }

    // once the end of either list is reached append the other list
    // this can be assumed because each list is sorted
    
    if (list1 === null) { 
        previous.next = list2 
    } else {
        previous.next = list1
    }

    // return sorted list
    return list3.next
};