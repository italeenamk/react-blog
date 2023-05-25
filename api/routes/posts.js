const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/post");

// create post
router.post("/", async (req, res) => {
    const  newPost = new Post(req.body);
    try{
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err){
            res.status(500).json(err);
        }
});

// update post
router.put("/:id", async (req, res) => {
    const  newPost = new Post(req.body);
    try{
        const post = Post.findById(req.params.id);
    } catch (err){
        res.status(500).json(err);
    }
});

// delete post

// get post



module.exports = router;