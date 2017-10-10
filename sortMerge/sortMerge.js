//Merge sort with Linked List


while (x != NULL && y != NULL) {

    if (x.value < y.value)
    {
        result.addNode(x.value);
        x = x.next;
    }
    else {
        result.addNode(y.value);
        y = y.next;
    }

}

while (x != NULL) {

    result.addNode(x.value)
    x = x.next;
}

while (y != NULL) {

    result.addNode(y.value)
    y = y.next;
}