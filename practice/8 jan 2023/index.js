var arr2 = new Array(92, 39, 94, 59, 96); //array is declared constructor method
var arr1 = [91, 2, 39, 4, 59, 6];
console.log(arr1.length); //method used to calculate the length
console.log(arr2);
console.log(typeof arr1);

//for loops for, for in, for of

for (var i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log("*************************");
//index
for (var i in arr2) {
  console.log(arr2[i]);
}
console.log("*************************");
// direct values
for (var i of arr1) {
  console.log(i);
}

console.log("*************************");

//adding values and removing values

//at the end we use push
arr1.push(100);

// at the beginning we use unshift
arr1.unshift(10000);
console.log(arr1);
//at a specific poision splice is used

//removal at beginning we use shift and at the end we use pop
arr1.shift();
arr1.pop();
console.log(arr1);

//push and pop are faster than shift and unshift as we have to shift in the later case

// splice

arr1.splice(0, 2); // removed the first 2 elemnts from [0,2) that is 2 is not included
// startindex, delete count, elements splice can add and delete both
arr1.splice(3, 0, 19000, 9800);
// if splice has 0 as 2nd argument then it will be used for adding values
console.log(arr1);

// join array to string
//split string to array

var string = "Hello,this,is,a,javascript,session";
//split will not change the original string it will return a new array
// split and join is a non destructive method that i it doesnot change the original string
var arr = string.split(",");
console.log(arr);
for (var i of arr) {
  console.log(i);
}
var arr4 = string.split("");
console.log(arr4);

//join
var string2 = arr.join("-"); //will apply , after every elemnt added
console.log(string2);

//toString()
var str4 = arr.toString();
console.log(str4);

var str = "HeroVired";
var ans = str.split("");
ans.splice(4, 5);
ans.splice(4, 0, "X");
str = ans.join("");
console.log(str);

var str5 = "2468";
var ans1 = str5.split("");
for (var i in ans1) {
  var num = Number(ans1[i]);
  num = num / 2;
  console.log(num);
  ans1[i] = num.toString();
}
str5 = ans1.join("");
console.log(str5);

//merging 2 arrays
var arr5 = [2, 3, 4, 5, 6, 7];
var arr6 = [10, 20, 30, 20, 40];
var arr7 = arr5.concat(arr6);
//concat is a non destructive method
console.log(arr7);
console.log(arr5);

//searching in an array
//indexOf method returns int value
console.log(arr6.indexOf(20));
console.log(arr6.lastIndexOf(20));
console.log(arr6.indexOf(201)); // if not found will return -1

//includes
console.log(arr6.includes(20, 30));
// first index what to search and 2nd index starting index

//find returns only the first value
var ans3 = arr6.find(function (el) {
  return el > 20;
});
console.log(ans3); //30

//filter //provides all the values according to the condition in form of array
var ans4 = arr6.filter(function (el) {
  return el > 20;
});
console.log(ans4); //[30,40]

//sorting
var arr8 = [40, 20, 100, 22, 11, 9];
console.log(arr8.sort()); //not working as it thinks the element as strings
console.log(
  arr8.sort(function (a, b) {
    // < 0 a comes first
    // > 0 b comes first
    // = 0 no changes
    return a - b;
  })
);

//reverse
var str10 = "shailesh";
console.log(arr8.reverse());

var str = "shailesh";
var splitString = str.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
console.log(joinArray);

//max
console.log(Math.max(10, 30, 40));
console.log(Math.max.apply(null, arr8));

//map
var result = arr8.map(function (el) {
  return el * el;
});

console.log(result);

//reduce
var f2 = function (a, b) {
  return a + b;
};
var output = arr8.reduce(f2);

console.log(output);

let strings = ["avengers", "captain america", "ironman", "black panther"];
var ans = strings.map((el) => {
  return el.toUpperCase();
});
console.log(ans);


var ques10 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var ans5=[]
ques10.map((el)=>{
  if(el%2==0)
  ans5.push(el)
})