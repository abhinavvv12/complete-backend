const express = require('express');
const noteModel = require('./models/note.model');

const app = express()

app.use(express.json())

/* 
API -
POST
GET
PATCH
DELETE
*/

app.post("/notes", async(req,res)=>{
    
    const data = req.body

    await noteModel.create({
        title : data.title,
        description : data.description
    })

    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes",async (req,res)=>{
    
    const notes = await noteModel.find() //gives array of objects or empty arr

    // const notes = await noteModel.findOne({ //returns object or null
    //     title: "test_title"
    // })

    res.status(200).json({
        message: "Notes fetched Successfully",
        notes : notes
    })
})

app.delete('/notes/:id', async (req,res)=>{

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Note Deleted",
    })

})

app.patch('/notes/:id', async(req,res)=>{

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id: id},{description: description})

    res.status(200).json({
        message:"note updated"
    })
})

module.exports = app

