const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/post");
const bcrypt = require("bcrypt");

// create post
router.post("/", async (req, res)=>{
        try{
            const savedPost = newPost.save();
            res.status(200).json(savedPost);
        } catch (err){
            res.status(500).json(err);
        }
});

// update post
router.delete("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (err){
                console.log(err);
                res.status(500).json(err);
            }
        }catch (err){
            res.status(400).json("User not found!");
        }
    } else{
        res.status(401).json("You can delete only your account!");
    }
});

// delete post

// get post

router.get("/:id", async (req, res)=>{
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others);
    }catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;