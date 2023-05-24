const router = require("express").Router();
const User = require("../models/User");

// update
router.post("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id){
        try{
        } catch (err){
            console.log(err);
            res.status(500).json(err);
        }
    } else{
        res.status(401).json("You can update only your account");
    }
});

// delete

module.exports = router;