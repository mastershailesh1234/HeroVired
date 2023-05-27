const fs = require('fs');
console.log("start");
fs.readFile("./node.txt","utf-8",(err,data)=>{
    console.log("we are inside call back function",data);
})
console.log("end");