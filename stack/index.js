// create a stack data structure. The stack
// should be a class with methods 'push', 'pop',and
// 'peek'. Adding an element to the stack should
// store it untill it is removed.
// --- Examples
//     const s = new stack();
//     s.push(1);
//     s.push(2);
//     s.pop(); // returns 2
//     s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = []
    }
    push(record) {
        this.data.push(record)
    }
    pop() {
        return this.data.pop()
    }
    peek() {
        return this.data[this.data.length - 1]
    }
}

const s = Stack()
s.push(1)
s.push(2)
s.push(3)

console.log(s.pop())
[5.4,1,2,3]