class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newnode = new Node(value);
    if (this.root == null) {
      this.root = newnode;
    } else {
      let curr = this.root;
      while (true) {
        if (value > curr.value) {
          if (curr.right == null) {
            curr.right = newnode;
            break;
          } else {
            curr = curr.right;
          }
        } else if (value < curr.value) {
          if (curr.left == null) {
            curr.left = newnode;
            break;
          } else {
            curr = curr.left;
          }
        }
      }
    }
  }
  search(value) {
    if (this.root == null) {
      return null;
    }
    let curr = this.root;
    while (curr != null) {
      if (curr.value == value) {
        return curr;
      } else if (curr.value > value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return null;
  }
  findmin() {
    let min = 0;
    if (this.root == null) {
      return null;
    }
    let curr = this.root;
    while (curr != null) {
      min = curr.value;
      curr = curr.left;
    }
    return min;
  }
  findmax() {
    let max = 0;
    if (this.root == null) {
      return null;
    }
    let curr = this.root;
    while (curr != null) {
      max = curr.value;
      curr = curr.right;
    }
    return max;
  }
}
const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
console.log(tree);
