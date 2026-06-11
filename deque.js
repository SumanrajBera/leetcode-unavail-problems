function node(value, next, prev) {
    return { next, value, prev }
}

function deque() {
    this.head = node(0, null, null);
    this.tail = node(0, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
}

deque.prototype.enqueueBack = function (value) {
    const newNode = node(value, this.head.next, this.head);
    const nextNode = this.head.next;
    this.head.next = newNode;
    nextNode.prev = newNode;
    this.size++;
}

deque.prototype.enqueueFront = function (value) {
    const newNode = node(value, this.tail, this.tail.prev)
    const prevNode = this.tail.prev;
    prevNode.next = newNode;
    this.tail.prev = newNode
    this.size++;
}

deque.prototype.dequeueFront = function () {
    if (this.size === 0) {
        console.log("Queue is empty")
        return
    }
    const targetNode = this.tail.prev;
    const pastNode = targetNode.prev;

    pastNode.next = this.tail;
    this.tail.prev = pastNode;
    this.size--;
}

deque.prototype.dequeueBack = function () {
    if (this.size === 0) {
        console.log("Queue is empty")
        return
    }
    const targetNode = this.head.next;
    const nextNode = targetNode.next;

    nextNode.prev = this.head;
    this.head.next = nextNode;
    this.size--;
}

deque.prototype.printQueue = function () {

    if (this.size === 0) {
        console.log("Queue is empty")
        return;
    }
    let current = this.tail.prev;
    while (current !== this.head) {
        process.stdout.write(current.value + " ");
        current = current.prev;
    }
    console.log()
}

const queue = new deque()
queue.enqueueFront(10)
queue.enqueueBack(20)
queue.enqueueFront(30)
queue.enqueueBack(40)
queue.enqueueFront(50)
queue.printQueue()
queue.dequeueFront()
queue.printQueue()
queue.dequeueBack()
queue.printQueue()
queue.dequeueBack()
queue.printQueue()
queue.dequeueFront()
queue.printQueue()
queue.dequeueFront()
queue.printQueue()
queue.enqueueBack(50)
queue.printQueue()