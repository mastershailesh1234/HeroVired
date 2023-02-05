function selectionsort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var index = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  console.log(arr);
}

function bubblesort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(arr);
  }
}
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [];
  var right = [];
  var pivot = arr[arr.length - 1];
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot,...quicksort(right)];
}
arr = [3, 5, 15, 45, 87, 11];
arr1 = [25, 3, 14, 2];
console.log(quicksort(arr1));


function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort2(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}
var items = [15, 22, 7, 4, 12, 9];
var sortedArray = quickSort2(items, 0, items.length - 1);
console.log(sortedArray);