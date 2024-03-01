const express = require('express');
const router = express.Router();
const Subscriber = require('../models/post');

// Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// Creating new post
router.post("/create", async (req, res)=>{
    try{
        const {titre, content} = req.body;
        const post = new Post({titre,content});
        await post.save();
        res.status(201).send("post created successfuly");
    }catch(error){
        res.status(400).send(error.message);
    }
})

//Update post 
router.put("/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        const {titre, content} = req.body;
        const updatePost = await Post.findByIdAndUpdate(id,{titre,content},{new:true});
        res.send(updatePost);
    }catch(error){
        res.status(400).send(error.message);
    }
})

//Delete post
router.delete("/:id", async (req,res)=>{
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted", deletedPost});
    }catch(error){
        res.status(400).send(error.message);
    }
})

module.exports = router;