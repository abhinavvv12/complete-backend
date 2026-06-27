const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model')

const router = express.Router()

router.post('/create', (req,res)=>{

    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const user = userModel.findOne({
            _id: decoded.id
        })
        console.log(decoded)
        console.log(user)
    }catch(err){
        return res.status(401).json({
            message:"Toek is Invalid"
        })
    }


    console.log(req.body)

    console.log(req.cookies)

    res.status(201).json({
        message:"post created successfully"
    })
})



module.exports = router