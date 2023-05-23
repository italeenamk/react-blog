const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");


dotenv.config();
app.use(express.json());


mongoose
    .connect(process.env.MONG0_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(console.log("connected"))
    .catch((err)=> console.log(err));

app.use("/api/auth", authRoute);

app.listen("5001", ()=>{
    console.log("backend")
});