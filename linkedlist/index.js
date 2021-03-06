// Implement classes Node and Linked Lists
// See 'html document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// class LinkedList {};

// const b = new Node('hello', 'world');

// console.log(b.data)
// console.log(b.next)

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++
            node = node.next;
        }
        return counter;
    }
    getfirst() {
        return this.head;
    }
    getLast() {
        if (this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
        
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next
        }
        previous.next = null;
    }
    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1)
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
        }
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data,previous.next);
        previous.next = node;
    }
    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter+=2
        }
    }
}


const list = new LinkedList()
list.insertFirst(1)
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)
// console.log(list.removeAt(1));
// console.log(list.insertAt(7,1))
// console.log(list);

list.forEach(node => {
    node.data +=2
})
console.log(list)
