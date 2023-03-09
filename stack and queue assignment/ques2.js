// Implement a last-in-first-out (LIFO) stack using only two
// queues. The implemented stack should support all the
// functions of a normal stack (push, top, pop, and empty).

class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue2.push(x);
    while (this.queue1.length != 0) {
      this.queue2.push(this.queue1[0]);
      this.queue1.shift();
    }
    var q = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = q;
  }

  pop() {
    if (this.queue1.length == 0) return;
    this.queue1.shift();
  }

  top() {
    if (this.queue1.length == 0) return -1;
    return this.queue1[0];
  }

  size() {
    console.log(this.queue1.length);
  }

  isEmpty() {
    return this.queue1.length == 0;
  }

  front() {
    return this.queue1[0];
  }
}


let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.size();
console.log(s.top());
s.size();
