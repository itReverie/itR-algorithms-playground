const QueueTwoStacks=function QueueTwoStacks() {
    this.inStack  = [];
    this.outStack = [];
}

QueueTwoStacks.prototype.enqueue = function(item) {
    this.inStack.push(item);
}

QueueTwoStacks.prototype.dequeue = function() {
    if (this.outStack.length === 0) {

        // Move items from inStack to outStack, reversing order
        while (this.inStack.length > 0) {
            var newestInStackItem = this.inStack.pop();
            this.outStack.push(newestInStackItem);
        }

        // If outStack is still empty, raise an error
        if (this.outStack.length === 0) {
            return undefined;
        }
    }
    return this.outStack.pop();
}


var myQueue=new QueueTwoStacks();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);