// Create a program that accepts the student data as input from the user.
// The student data should contain the following information:
// Student id
// Student name
// Student marks in 5 subjects

// Store this information in a tree data structure where each node represents a single student.
// The tree should be a binary search tree and use the percentage of each student as a criterion for storing objects.
// After storing all the information, the user will enter the name of a student
// and his/her grades should be displayed on the screen.

class Student {
  constructor(id, name, marks) {
    this.id = id;
    this.name = name;
    this.value = marks;
    this.left = null;
    this.right = null;
  }
}

class StudentTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }
  insert(id, name, marks) {
    const student = new Student(id, name, marks);
    this.length++;
    if (this.root == null) {
      this.root = student;
      return;
    }
    var curr = this.root;
    while (curr != null) {
      if (curr.value >= marks) {
        if (curr.left == null) {
          curr.left = student;
          return;
        } else {
          curr = curr.left;
        }
      } else {
        if (curr.right == null) {
          curr.right = student;
          return;
        } else {
          curr = curr.right;
        }
      }
    }
  }
  search(name) {
    if (this.root == null) {
      return "Student record is empty";
    }
    var node = null;
    var queue = [];
    queue.push(this.root);
    while (queue.length != 0) {
      var ele = queue.shift();
      if (ele.name == name) {
        return ele.value;
      }
      if (ele.left != null) {
        queue.push(ele.left);
      }
      if (ele.right != null) {
        queue.push(ele.right);
      }
    }
    return "Not Found";
  }
}

const t = new StudentTree();
t.insert("1", "shailesh", 90);
t.insert("2", "ram", 75);
t.insert("3", "shyam", 95);
t.insert("4", "shaill", 88);
t.insert("5", "patro", 67);
t.insert("6", "hero", 34);
t.insert("7", "hello", 60);
console.log(t.search("shll"));
