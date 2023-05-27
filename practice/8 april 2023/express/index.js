const express = require("express");
const app = express();

app.get("/test",(req,res)=>{
    res.send("Get method working and also my server")
})

app.listen(3000, () => {
  console.log("My server is running on 3000");
});
