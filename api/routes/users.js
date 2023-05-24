const router = require("express").Router();
const User = require("../models/User");

// update
router.post("/:id", async (req, res)=>{
    try{
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

// delete

module.exports = router;