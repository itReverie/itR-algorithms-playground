Find the middle element in a Single Linked List

class LL {
int value;
class LL *next;
};



2->3->4->5->7

counter  0  1   2   3    4
curr       2  3   4   5    7   null
midd     2   2   3   3    4

return middle

4


function findMiddleElement(node head)
{
       node currNode = head;

    node middle = head;
int counter = 0;
  while (currNode != NULL)
        {
      counter++;
  currNode = currNode.next;


     if (counter % 2 == 0) {
            middle = middle.next;
}
    }

return middle;
}



find 3rd element from last node
kth element