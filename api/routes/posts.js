const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/post");

// create post
router.post("/", async (req, res)=>{
        try{
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err){
            res.status(500).json(err);
        }
});

// update post

// delete post

// get post



module.exports = router;