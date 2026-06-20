// create the server 

const express = require('express');

const app = express();

app.use(express.json())
// we need to use express.json (middleware) because express automatically doesn't have capability to read the data, we use .json method to add this functionality to express otherwise, the data coming from the frontend cannot be read which is in the body


// Now we are going to create a server, which lets user create notes, update, delete

notes = [] //to store the set of notes created by the user

// we need 'title' and 'desc' from the user


// creating the api  (the data from the frontend will be stored in request)
// post API
app.post('/notes', (req,res)=> {
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
}) //we are using post method because, post -> to send data to the server from frontend (REST API -Protocol)


// get API
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message : "notes fetched successfully",
        notes:notes
    })
})


// delete API
// delete/notes(static)/:index(dynamic) -> we need to put ':' to indicate that it is dynamic
app.delete('/notes/:index', (req, res)=>{

    const index = req.params.index

    delete notes[ index ]

    res.status(201).json({
        message: "note deleted successfully",
        notes:notes
    })
})

app.patch('/notes/:index', (req,res) =>{
    const index = req.params.index

    const description = req.body.description
    const title = req.body.title

    notes[index].description = description
    notes[index].title = title


    res.status(200).json({
        message: "note updated successfully"
    })

    
})



module.exports = app