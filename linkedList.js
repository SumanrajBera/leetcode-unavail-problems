class Node {
    constructor(val) {
        this.node = val;
        this.next = null
    }
}

class LL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtFirst(val) {
        const newNode = new Node(val);
        if (this.head !== null) {
            newNode.next = this.head
        }
        this.head = newNode
        this.size++
    }

    insertAtLast(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next
            }

            temp.next = newNode
        }
        this.size++
    }

    insertAtPos(val, pos) {
        if (pos <= 0 || pos > this.size) {
            console.log("Not a valid index")
            return
        }

        if (pos === 1) {
            this.insertAtFirst(val)
            return
        }

        this.size++;
        let temp = this.head;
        const newNode = new Node(val)
        for (let i = 1; i < pos - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode
    }

    deleteAtFirst() {
        if (this.head === null) {
            console.log("Linked List is Empty")
            return
        }

        this.head = this.head.next

        this.printLL()
    }

    deleteAtLast() {
        if (this.head === null || this.head.next === null) {
            this.head = null
            console.log("Linked List is Empty")
            return
        }
        let temp = this.head;
        let prevTemp = null
        while (temp.next !== null) {
            prevTemp = temp;
            temp = temp.next
        }
        prevTemp.next = null

        this.printLL()
    }

    deleteAtPos(pos) {
        if (pos <= 0 || pos > this.size) {
            console.log("Can't delete beyond the size of linked list")
            return
        }

        if (this.size === 1) {
            this.head = null;
            return
        }

        if (pos === 1) {
            this.deleteAtFirst()
            return
        }

        let temp = this.head;
        for (let i = 1; i < pos - 1; i++) {
            temp = temp.next;
        }
        let nextNode = temp.next.next;
        temp.next = nextNode
        this.printLL()
    }

    printLL() {
        let temp = this.head;

        if (temp === null) {
            console.log(`Empty Linked List`)
        } else {
            while (temp !== null) {
                process.stdout.write(temp.node + " -> ");
                temp = temp.next
            }
            console.log("NULL")
        }
    }
}

const newLL = new LL()
newLL.insertAtFirst(10);
newLL.printLL()
newLL.insertAtFirst(20);
newLL.printLL()
newLL.insertAtFirst(30);
newLL.printLL()
newLL.insertAtFirst(40);
newLL.printLL()
newLL.insertAtLast(60);
newLL.printLL()
newLL.insertAtPos(5, 3)
newLL.printLL()
newLL.insertAtPos(7, 1)
newLL.printLL()
newLL.deleteAtFirst()
newLL.deleteAtLast()
newLL.deleteAtLast()
newLL.deleteAtLast()
newLL.deleteAtLast()
newLL.deleteAtPos(2)
newLL.deleteAtPos(1)