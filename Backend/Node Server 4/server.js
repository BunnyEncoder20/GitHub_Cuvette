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
    
// Setting up Server to listen to requests 
app.listen(process.env.PORT , ()=>{
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(()=>console.log(`[Server] Server Running at http://localhost:${process.env.PORT}\n[MongoDB] Connected to DB`))
        .catch((err)=>console.log(err))
})


app.get('/' , (req,res)=>{
    res.json({
        status : "SUCCESS",
        message : "Server running now"
    })
})

// Code to create a collection customers with basic structure 
//note that the actual collection name would be all small letters with a 's' (to make it plural)
const CustomerModel = mongoose.model('Customer' , {  
    uname : String ,
    email: String ,
    phoneNumber:Number,
    avatarURL:String
})


app.get('/users' , (req,res)=>{
    users = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "likescake" : true
          },
          {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg",
            "likescake" : false
          },
          {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg",
            "likescake" : true
          },
          {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg",
            "likescake" : true
          },
          {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg",
            "likescake" : false
          },
          {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg",
            "likescake" : false
          }
    ]

    res.json({
        status: "Successful" ,
        data : users
    })
})


// READ : GET /customers 
app.get('/customers' , async (req,res) => {
    try{
        // throw new Error('Dummy Error')   // this will cause the catch block to activate
        const cust = await  CustomerModel.find()
        res.json({
            status : 'Success' ,
            data: cust
        })
    }
    catch(error) {
        res.status(500).json({
            status : 'Failure' ,
            msg: `Something went wrong\n${error}`
        })
    }
})


// CREATE : POST /customers
app.post('/customers/create' , async (req,res) => {
    try{
        // throw new Error('Dummy Error')   // this will cause the catch block to activate
        console.log(req.body)
        
        const {uname, email, phoneNumber, avatarURL} = req.body // destructuring the data from req.body

        await CustomerModel.create({uname, email, phoneNumber, avatarURL})   //sending data to create a document. Notice the callback function to handle the errors

        res.json({
            status: 'Success',
            msg : "Customer created"
        })
    }
    catch(error) {
        res.status(500).json({
            status : 'Failure' ,
            msg: `${error}`
        })
    }
})


// Update : PATCH /customers/update/:id
app.patch('/customers/update/:id' , async (req,res)=>{
    try{
        // throw new Error('Dummy Error')   // this will cause the catch block to activate
    
        const {id} = req.params ;        // getting the id to update using params 
        const {uname, email, phoneNumber, avatarURL} = req.body ;       // getting the form details from teh body object using destructuring
        
        console.log("Patching Request for : ",id)
        await CustomerModel.findByIdAndUpdate(id, {uname, email, phoneNumber, avatarURL})

        res.json({
            status: 'Success',
            uid_updated : id,
            msg : "Customer Updated"
        })
    }
    catch(error) {
        res.status(500).json({
            status : 'Failure' ,
            msg: `${error}`
        })
        console.log(error)
    }
})


// DELETE : DELETE /customers/delete/:id
app.delete('/customers/remove/:id' , async (req,res)=>{
    try{
        // throw new Error('Dummy Error')   // this will cause the catch block to activate
        // temp user made in the collection - { id : "658bcaa84baf63736886550a" , "name" : "ram" } 
        
        let id = req.params.id ;
        console.log("Delete Request for : ",id)
        await CustomerModel.findByIdAndDelete(id)

        res.json({
            status: 'Success',
            uid_removed : id ,
            msg : "Customer Deleted"
        })
    }
    catch(error) {
        res.status(500).json({
            status : 'Failure' ,
            msg: `${error}`
        })
    }
    
})
