// Q4. Given a park with few sensors present, cross it by taking
// the shortest safe path without activating the sensors.
// The park is in the form of an m× n matrix, and we need to
// find the shortest path from any cell in the first column to
// any cell in the last column of the matrix. The sensors are marked
// by the value 0 in the matrix, and all its eight adjacent cells
// can also activate the sensors. The path can only be constructed
// out of cells having value 1, and at any given moment, we can
// only move one step in one of the four directions.
// The valid moves are:

// Go Up: (a, b) ——> (a – 1, b)

// Go Left: (a, b) ——> (a, b – 1)

// Go Down: (a, b) ——> (a + 1, b)

// Go Right: (a, b) ——> (a, b + 1)

// Skill mapping: Js basics (Queue)

class item {
  constructor(x, y, dist) {
    this.x = x;
    this.y = y;
    this.dist = dist;
  }
}

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
    this.length = 0;
  }
  enqueue(x, y, dist) {
    var node = new item(x, y, dist);
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
const queue = new Queue();

function valid(x, y, M, N) {
  if (x < M && x >= 0 && y >= 0 && y < N) {
    return true;
  }
  return false;
}

function shortestpath(mat) {
  var M = mat.length;
  var N = mat[0].length;
  var r = [-1, -1, -1, 0, 0, 1, 1, 1];
  var c = [-1, 0, 1, -1, 1, -1, 0, 1];
  for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
      for (var k = 0; k < 8; k++) {
        if (
          !mat[i][j] &&
          valid(i + r[k], j + c[k], M, N) &&
          mat[i + r[k]][j + c[k]]
        ) {
          mat[i + r[k]][j + c[k]] = Number.MAX_VALUE;
        }
      }
    }
  }
  for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
      if (mat[i][j] == Number.MAX_VALUE) {
        mat[i][j] = 0;
      }
    }
  }
  console.log(mat);
  return BFS(mat, M, N);
}
function BFS(mat, M, N) {
  var q = new Queue();
  var visited = new Array(M);
  for (var i = 0; i < M; i++) {
    visited[i] = new Array(N);
  }
  for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
      visited[i][j] = false;
    }
  }
  for (var i = 0; i < M; i++) {
    if (mat[i][0] == 1) {
      q.enqueue(i, 0, 0);
      visited[i][0] = true;
    }
  }
  var row = [-1, 0, 0, 1];
  var col = [0, -1, 1, 0];
  while (!q.empty()) {
    var x = q.peek().x;
    var y = q.peek().y;
    var dist = q.peek().dist;
    q.dequeue();
    if (y == N - 1) {
      return dist;
    }
    for (var k = 0; k < 4; k++) {
      if (
        valid(i + row[k], j + col[k], M, N) &&
        mat[x][y] != 0 &&
        !visited[x][y]
      ) {
        visited[i + row[k]][j + col[k]] = true;
        q.enque(i + row[k], j + col[k], dist + 1);
      }
    }
  }
  return -1;
}
var mat = [];
var answer = shortestpath(mat);
console.log(answer);
if (answer != -1) {
  console.log(answer);
} else {
  console.log("No route found");
}
