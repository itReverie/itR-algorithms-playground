//In this solution we solve it in O(n) time and O(n) space

function Linkedlist(value){
    this.value=value;
    this.next=null;
}

var a = new Linkedlist('bannana');
var b = new Linkedlist('apple');
var c = new Linkedlist('orange');
var d = new Linkedlist('pear');
var e = new Linkedlist('plumb');
var f = new Linkedlist('blueberries');
var g = new Linkedlist('mango');
var h = new Linkedlist('pinaple');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var result=kthToLastNode (4, a);
console.log("Result="+result );

var result=kthToLastNodeNoSpace (4, a);
console.log("Result without space="+result.value );



function kthToLastNodeNoSpace(k, head) {
    let pointer1 = head;
    let pointer2 = head;
    let counter = 1;

    while(counter<=k){
        counter++;
        pointer2 = pointer2.next;
    }
    //pointer1 and pointer2 are k distance apart

    while (pointer2 != null) {
        counter++;
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1;
}


function kthToLastNode(k, node)
{
    var counter=0;
    var dictionaryPositionvalue=[];

    while(node && node.next){

        node= node.next;
        //console.log(node.value);
        counter++;
        dictionaryPositionvalue[counter] = node.value;
    }
    var positionK = (counter+1) - k;
    return dictionaryPositionvalue[positionK];
}