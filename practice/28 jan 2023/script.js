// document.addEventListener("contextmenu", (RightClick) => {
//   RightClick.preventDefault();
//   alert("Right click is not allowed");
// });

// var jokes = ["joke1", "joke2", "joke3", "joke4", "joke5"];
// var val = Math.floor(Math.random() * jokes.length);
// var ele = document.createElement("h1");
// ele.innerHTML = jokes[val];
// console.log(val);
// document.getElementById("container").appendChild(ele);

// var d = new Date();
// let day = d.getDate();
// let mon = d.getMonth() + 1;
// let year = d.getFullYear();
// console.log(day, mon, year);

//binary search
function binarysearch(target) {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  var start = 0,
    end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}
binarysearch(11);

//remove duplicate items
//frequency array
// max and min of an array
//count number of prime elements in an aarray

arr = []
