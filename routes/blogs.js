const express = require("express");
const router = express.Router();

const { Blog } = require('../models')

//Create a new Blog
router.post('/', async (req,res) => {
    const { entry, date } = req.body
    try {
        const blog = await Project.create({enrty, date})
        res.status(201).json(blog)
    } catch(error) {
        res.status(500).json({message: "Error creating blog",error})
    }
})

//Get all blogs
router.get('/', async (req,res) => {
    try {
        const blogs = await Blog.findAll()
        res.json(blogs)
    } catch (error) {
        res.status(500).json({message: "Error retrieving blogs", error})
    }
    
})

//Get a specific project by id
router.get('/:id', async (req,res) => {
    try {
        const blog = await Blog.findByPk(req.params.id)
        if (!blog){
            res.status(404).json({message: "Blog not found"})
        } else {
            res.json(blog)
        }
    }catch (error) {
        res.status(500).json ({message: "Error retrieving blog"})
    }
})



module.exports = router;