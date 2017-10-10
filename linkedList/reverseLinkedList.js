//Sum to numbers with a Linked List
// Input: 258 + 60
// Output:
function Linkedlist(value){
    this.value=value;
    this.next=null;
}

let _2 = new Linkedlist(2);
let _5 = new Linkedlist(5);
let _8 = new Linkedlist(8);
_2.next =_5;
_5.next =_8;


let _6 = new Linkedlist(6);
let _0 = new Linkedlist(0);
_6.next =_0;


function sumNumbers(llNumber1, llNumber2) {
    let n1 = llNumber1.head, n2 = llNumber2.head;
    let carry = 0;

    let _result = new Linkedlist();

    // let dummyNode = new Linkedlist();
    // dummyNode.value =??;
    //
    // let L3(dummyNode);
    // dummyNode.next

    while (n1 != null || n2 != null) {
        let num1 = n1 == null ? 0 : n1.value;
        let num2 = n2 == null ? 0 : n2.value;
        let sum = num1 + num2 + carry;

        let res = sum % 10;
        carry = sum / 10;

        _result.value=res;

        n1 = n1.next;
        n2 = n2.next;


    }
    return _result.next;
}


let result=sumNumbers(_2,_6);
console.log(result);

/*
9 + 9 + carry (2)

sum = 18 + 2 =
    sum = 20 % 10 = 0
20 / 10 = 2 - carry
1, 1

*/