// Implemnt a Queue data structure using two stacks
// *Do not* create an array inside the 'Queue' class
// Queue should implement the methods 'add', 'remove', and 'peek'
// for remainder on which each method does,look back at the queue exercise
// ----Examples
//     const q = new queue();
//     q.add(1);
//     q.add(2);
//     q.peek(); // returns 1
//     q.remove(); // returns 1
//     q.remove(); // rteurns 2


const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record)
    }
// 1['a'] // 2[a]
    remove() {
        while (this.first.peek()){
            this.second.push(this.first.pop())
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.push())
        }
        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
    }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.peek();
console.log(q)