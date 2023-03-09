// Q5. Given a binary tree, write an efficient algorithm to delete the entire binary tree.
// Here, you have to make use of an iterative way where you perform a level order traversal on the tree.

// Note: The idea here is to delete each node in the queue one by one.

// Skill mapping: Js basics (Queue and Binary search tree)

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
    this.length = 0;
  }
  enqueue(node) {
    this.items[this.back] = node;
    this.back++;
    this.length++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.length--;
  }
  peek() {
    return this.items[this.front];
  }
  empty() {
    if (this.length == 0) {
      return true;
    }
    return false;
  }
}

class Tree {
  deleteTree() {
    this.head = null;
    this.tail = null;
    this.lenth = 0;
  }
  insert(val) {
    const node = new Node(val);
    this.length++;
    if (this.root == null) {
      this.root = node;
      return;
    }
    var curr = this.root;
    while (curr != null) {
      if (curr.value >= marks) {
        if (curr.left == null) {
          curr.left = node;
          return;
        } else {
          curr = curr.left;
        }
      } else {
        if (curr.right == null) {
          curr.right = node;
          return;
        } else {
          curr = curr.right;
        }
      }
    }
  }
  deleteiterative() {
    const queue = new Queue();
    q.enqueue(this.root);
    while (!q.empty()) {
      var node = q.peek();
      q.dequeue();
      if (node.left != null) {
        q.enqueue(node.left);
      }
      if (node.right != nul) {
        q.enqueue(node.right);
      }
      node = null;
    }
    this.root = null;
  }

  delete1() {
    this.root = null;
  }
  deleterecursive2(node) {
    if (node == null) return;
    deleteTree(node.left);
    deleteTree(node.right);
    node = null;
  }
}
