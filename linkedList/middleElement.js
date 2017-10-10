//Find the middle element in a Single Linked List
// INPUT: 2->3->4->5->7->10->15
// Output: 5
//In this solution we solve it in O(n) time and O(1) space

function Linkedlist(value) {
    this.value = value;
    this.next = null;
}


let _2 = new Linkedlist(2);
let _3 = new Linkedlist(3);
let _4 = new Linkedlist(4);
let _5 = new Linkedlist(5);
let _7 = new Linkedlist(7);
let _10 = new Linkedlist(10);
let _15 = new Linkedlist(15);

_2.next = _3;
_3.next = _4;
_4.next = _5;
_5.next = _7;
_7.next = _10;
_10.next = _15;

//counter  0  1   2   3    4
//curr       2  3   4   5    7   null
//midd     2   2   3   3    4

function findMiddleElement(head) {
    let currNode = head;
    let  middle = head;
    let counter = 0;

    while (currNode != null) {
        counter++;
        currNode = currNode.next;

        //In this case I use mod 2 as I need to find the half or middle element so mod  and next will help me to identify withouth having to iterate another loop
        if (counter % 2 == 0) {
            middle = middle.next;
        }
    }
    console.log(middle);
    return middle;
}

findMiddleElement(_2);
//I can use % to get the Kth element from the last node in the linkedList. For example:
// %2 will give me the half of the linked linkedList
// %3 - 4 will give me the third element from the last node
// %4 - 3 will give me the fourth element from the last node