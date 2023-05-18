const express = require("express");
const app = express();

console.log("hello")

app.listen("5001", ()=>{
    console.log("backend")
});