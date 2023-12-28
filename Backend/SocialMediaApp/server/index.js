const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const dotenv = require('dotenv')

const app = express()            // initializing the app
app.set('view engine' , 'ejs')  //  setting the view engine to ejs
dotenv.config()



// Crating a mongoose.model(collectionName, schema)
const Users = mongoose.model('users' , 
    {
        first_name : String ,
        last_name : String ,
        email : String,
        avatar : String
    }
) ;

// setting up the middlewares 
app.use(body_parser.urlencoded({extended:false}))     // body-parser for urlencoded 
app.use(express.static('./public'))                                 // making public folder available to all files 
// importing CORS 
var cors =  require('cors')
app.use(cors())
// Importing json body-parser because we are handling object data when sending newUser 
app.use(body_parser.json()) ;


// Starting the Server 
app.listen(process.env.PORT , () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then( () => console.log(`[Server] Running at http://localhost:${process.env.PORT}\n[MongoDB] Connected to DB`))
        .catch( err => console.log('[Server] Error occurred while starting the server : \n',err))
})


// initial get request 
app.get('/' , (req,res) => {
    res.json({
        Title : "Server of Social Media App" ,
        Author : "Varun Verma" ,
        msg : "Server has started successfully"
    })
})



// Read operations on the DB
app.get('/users' , async (req,res) => {
    try {
        const users = await Users.find()       // find all the users from the collections
        res.json({
            status : 'SUCCESS' ,
            data : users 
        })
    } catch (err) {
        res.status(500).json({
            status : 'Fail',
            msg : 'Something went wrong when fetching the users',
            error : err
        })
    }
})

// Create Operations on the DB
app.post('/users' , async (req,res) => {
    try {
        const {first_name, last_name, email, avatar} = req.body ;
        await Users.create(
                        {first_name, last_name, email, avatar}
                    )
        res.json({
            status : 'SUCCESS : added user' ,
            fname :  first_name ,
            lname : last_name
        })
    } catch (err) {
        res.status(500).json({
            status : 'FAIL',
            msg : 'Something went wrong while adding user',
            error : err
        })
    }
})