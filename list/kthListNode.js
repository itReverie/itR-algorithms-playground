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

var result=kthToLastNode (7, a);
console.log("Result="+result );

function kthToLastNode(k, node)
{
    var counter=0;
    var dictionaryPositionvalue=[];

    while(node && node.next){

        node= node.next;
        console.log(node.value);
        counter++;
        dictionaryPositionvalue[counter] = node.value;
    }
    var positionK = (counter+1) - k;
    return dictionaryPositionvalue[positionK];
}