// class Pen{
//     constructor(name,color,price){
//         this.name=name
//         this.color=color
//         this.price=price
//     }
//     showPrice(){
//         console.log(`Price of ${this.name} is ${this.price}`)
//     }
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  preppend(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }
  appendatmid(index, value) {
    let newNode = new Node(value);
    let currNode = this.head;
    let count = 1;
    while (count < index) {
      currNode = currNode.next;
      count++;
    }

    newNode.next = currNode.next;
    currNode.next = newNode;
  }
  deleteTail() {
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }
  print(){
    let curr = this.head;
    let arr = []
    while(curr!=null){
        arr.push(curr.value);
        curr=curr.next;
    }
    return arr;
  }
  search(key){
    let curr = this.head;
    while(curr!==null){
        if(curr.value==key){
            return true;
        }
        curr=curr.next;
    }
    return false;
  }
  delete_index(index) {
    let count = 0;
    let currentNode = this.head;
    if (index < 0 || index >= this.length) {
      console.log("invalid index");
    } else {
      if (index == 0) {
        this.head = currentNode.next;
        this.length--;
      } else {
        var previousNode = currentNode;
        while (count < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          count++;
        }
        previousNode.next = currentNode.next;
        this.length--;
      }
    }
  }
}
let l1 = new LinkedList(1);
l1.append(2);
l1.append(3).append(4).append(5)
console.log(l1.search(2))
console.log(l1.print());