//string is a data type
var str = "yoo";
//escape characters
// \n newline  , \r carriage return, \t tab character , \' will print '
console.log(str.length);
var i = str.indexOf("world", 10); // returns the index of the start of the word
var i2 = str.lastIndexOf("Hello"); // will give the last occarance of the word
// if not found it will give -1
var i3 = str.search("is"); // ignores the global flags so regular expression wont work
// str.slice("start index", "end index")
console.log(str.slice(3, 5)); // extracts the perticular string for me
var str2="0123456789"
