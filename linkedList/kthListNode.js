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
    let currNode = head;
    let  middle = head;
    let counter = 0;

    while (currNode != null) {
        counter++;
        currNode = currNode.next;

        //In this case I use mod 2 as I need to find the half or middle element so mod  and next will help me to identify withouth having to iterate another loop
        if (counter % k == 0) {
            middle = middle.next;
        }
    }
    return middle;
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