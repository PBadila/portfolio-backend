const express = require("express");
const router = express.Router();

const { Project } = require('../models')

//Create a new Project
router.post('/', async (req,res) => {
    const { name, date, tools, description, video, gitHub, link } = req.body
    try {
        const project = await Project.create({name, date, tools, description, video, gitHub, link})
        res.status(201).json(project)
    } catch(error) {
        res.status(500).json({message: "Error creating project",error})
    }
})

//Get all projects
router.get('/', async (req,res) => {
    try {
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        res.status(500).json({message: "Error retrieving projects", error})
    }
    
})

//Get a specific project by name
router.get('/:name', async (req,res) => {
    try {
        const project = await Project.findAll({
            where: {
                name : req.params.name
            }
        })
        if (!project){
            res.status(404).json({message: "Project not found"})
        } else {
            res.json(project)
        }
    }catch (error) {
        res.status(500).json ({message: "Error retrieving project"})
    }
})

module.exports = router;