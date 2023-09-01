// npm init
// npm i express ejs body-parser dotenv mongoose

const express = require('express')
const app = express()

const ejs = require('ejs')
app.set('view engine' , 'ejs')

const dotenv = require('dotenv')
dotenv.config()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// Setting up the middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('./public'))

// Setting up to listen to requests 
app.listen(process.env.PORT , ()=>{
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(()=>console.log(`[Server] Server Running at http://localhost:${process.env.PORT}\n[MongoDB] Connected to DB`))
        .catch((err)=>console.log(err))
})


// Code to create a collection cutomers with basic structure 
const Customer = mongoose.model('Customer' , {  //note that the actual collection name would be all small letters with a 's' (to make it pural)
    name : String ,
    email: String ,
    phoneNumber:Number,
    avatarURL:String
})

app.get('/' , (req,res)=>{
    res.json({
        status : "SUCCESS",
        message : "Server running now"
    })
})
