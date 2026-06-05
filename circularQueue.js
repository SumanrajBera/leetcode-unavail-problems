class Queue {
    constructor(size) {
        this.size = size
        this.arr = new Array(size)
        this.front = -1
        this.rear = -1
    }

    enqueue(val) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full")
            return
        }
        if (this.front === -1) this.front = 0
        this.rear = (this.rear + 1) % this.size
        console.log("Enqueue:", val)
        this.arr[this.rear] = val
    }

    dequeue() {
        if (this.front === -1) {
            console.log("Queue is Empty");
            return
        }
        let deleteElement = this.arr[this.front]
        if (this.front === this.rear) {
            this.front = -1
            this.rear = -1
        } else {
            this.front = (this.front + 1) % this.size
        }
        console.log("Dequeued:", deleteElement)
    }

    printQueue() {
        if (this.front === -1) {
            console.log("Queue is empty")
            return
        }

        let i = this.front;
        while (true) {
            process.stdout.write(this.arr[i] + " ")
            if (i === this.rear) break;
            i = (i + 1) % this.size
        }
        console.log("")
    }
}

let queue = new Queue(5);
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.printQueue()
queue.enqueue(60)
queue.dequeue()
queue.printQueue()
queue.dequeue()
queue.printQueue()
queue.dequeue()
queue.printQueue()