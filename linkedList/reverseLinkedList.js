//One of list of empty
//Both the lists are empty
//One node, 2 nodes...

//Sum to numbers with a Linked List
// Input: 258 + 60
// Output: 318
//O(n) time and O(1)O(1)O(1) space.
function Linkedlist(value) {
    this.value = value;
    this.next = null;
}

let _2 = new Linkedlist(2);
let _5 = new Linkedlist(5);
let _8 = new Linkedlist(8);
_2.next = _5;
_5.next = _8;


let _6 = new Linkedlist(6);
let _0 = new Linkedlist(0);
_6.next = _0;


//First I need to reverse this list so I can start summing with the least representative one
function reverseList(head) {

    let current = head;
    let previous = null;
    var nextTemp;

    while (current != null) {
        nextTemp = current.next;
        current.next = previous;
        previous = current;
        current = nextTemp;
    }
    //console.log(previous);
    return previous;

}

let number1Reveresed= reverseList(_2);
let number2Reveresed= reverseList(_6);

function sumNumbers(llNumber1, llNumber2) {
    let n1 = llNumber1, n2 = llNumber2;
    let carry = 0;
    let _result = new Linkedlist();
    //_result.next= null;

    while (n1 != null || n2 != null) {
        let num1 = n1 == null ? 0 : n1.value;
        let num2 = n2 == null ? 0 : n2.value;
        let sum = num1 + num2 + carry;

        let res = Math.floor(sum % 10);
        carry = sum / 10;

        let _result1= new Linkedlist(res);
        _result1.next = _result;
        _result= _result1;


        if(n1!== null) {
            n1 = n1.next;
        }
        if(n2!== null) {
            n2 = n2.next;
        }

    }
    return _result;
}


let result=sumNumbers(number1Reveresed,number2Reveresed);
console.log(result);

/*
9 + 9 + carry (2)

sum = 18 + 2 =
    sum = 20 % 10 = 0
20 / 10 = 2 - carry
1, 1

*/