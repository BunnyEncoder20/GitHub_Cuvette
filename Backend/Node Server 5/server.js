const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.set('view engine', 'ejs')
dotenv.config()

// setting up middlewares 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Creating a simple middleware 
const isLoggedIn = (req,res,next) => {
    let loggedIn = true ;

    if(!loggedIn){
        return res.json({           // if the suer is nnot loggedIn then return the request from here only (from teh middle)
            status : 'FAIL' ,
            msg : '[middleware] Please login first'
        })
    }

    // else if LoggedIn : 
    next() ;        // basically lets the request proceed to the server 
}
// Making the middleware attached to all the routes : 
app.use(isLoggedIn)             // note to not call the function only pass the ref

app.get('/server5/example1' , isLoggedIn , (req,res) => {
    res.json({
        status: "SUCCESS",
        msg: "passed the middleware" 
    })
})

app.get('/server5/example2' , (req,res) => {
    res.json({
        status: "SUCCESS",
        msg: "passed the middleware" 
    })
})


// JWT codes - Private routes 
// headers - are nothing but meta data
// JWT Middlewares 
const privateLoggedIn = (req,res,next) => {
    try {
        const jwtToken = req.headers.token ;
        const user = jwt.verify(jwtToken, process.env.JWT_PASSWORD)
        req.user = user ;
        next();
    } catch (err) {
        console.log(err) ;
        res.json({
            status : 'FAIL' ,
            msg : '[middleware] Please login first'
        })
    }
}

const privateAdmin = (req,res,next) => {
    if(!req.user.isAdmin) {
        return res.json({
            status : 'FAIL' ,
            msg : '[middleware] You do not have admin permissions'
        })
    }
    next() ;
}

//  Need to check if user is loggedIn
app.get('/server5/dashboard' , privateLoggedIn,  (req,res) => {
    let validUser = req.user ;
    res.json({
        status: 'SUCCESS' ,
        msg: `Welcome ${validUser.mName} of account ${validUser.mEmail} to the Dashboard`
    }) ;
})

// Need to check LoggedIn + isAdmin 
app.get('/server5/admin' , privateLoggedIn, privateAdmin , (req,res) => {
    let validUser = req.user ;
    res.json({
        status: 'SUCCESS' ,
        msg: `Welcome ${validUser.mName} of account ${validUser.mEmail} to the Admin Page`
    }) ;
})





// making mongoose schema 
const memberModelref = mongoose.model('Member', {
    mName: String,
    mEmail: String,
    mPassword: String,
    isAdmin : Boolean
})

// Starting the server 
app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log(`[Server] Running at http://localhost:${process.env.PORT}\n[MongoDB] Connected to DB`))
        .catch(err => console.log('[Server] Error occurred while starting the server : \n', err))
})

// initial get request 
app.get('/server5',  isLoggedIn, (req, res) => {
    res.json({
        Title: "Node Server 5",
        Author: "Varun Verma",
        SERVER: "Server has started successfully",
        MONGO: "Mongoose Model made"
    })
})

app.post('/server5/signup', async (req, res) => {
    try {
        const { mName, mEmail, mPassword } = req.body;
        // Check if the required properties are present in the request body
        if (!mName || !mEmail || !mPassword) {
            return res.status(400).json({
                status: 'FAIL',
                msg: 'Incomplete data',
            });
        }
        // else making the document 
        let saltRounds = 10 //this is basically the rounds of encryption the password will undergo
        const encryptedPassword = await bcrypt.hash(mPassword, saltRounds);   // 
        await memberModelref.create({
            mName,
            mEmail,
            mPassword: encryptedPassword
        })
        res.json({
            status: 'SUCCESS',
            user: mName,
            msg: ' user added'
        })
    }
    catch (err) {
        
        res.status(500).json({
            status: 'FAIL',
            msg: 'Something went wrong while adding user',
            error: err
        })
    }
})


app.post('/server5/login', async (req, res) => {
    try {
        const { mEmail, mPassword } = req.body;
        // checking if data has come or not 
        if (!mEmail || !mPassword) {
            return res.status(400).json({
                status: 'FAIL',
                msg: 'Incomplete data',
            });
        }

        // Quering the DB to find the specific user
        const user = await memberModelref.findOne({ mEmail })

        // If user doesn't exist : 
        if (!user) {
            return res.status(404).json({
                status: 'FAIL',
                msg: '[Mongo] email not found',
            })
        }

        // if the password matches or not 
        const samePassword = await bcrypt.compare(mPassword, user.mPassword)
        if (!samePassword) {
            return res.status(404).json({
                status: 'FAIL',
                msg: '[Mongo] Incorrect Password',
            })
        }

        const JWTToken = jwt.sign(user.toJSON(), process.env.JWT_PASSWORD, { expiresIn:60 })

        // else return the user info : 
        res.json({
            Status: "SUCCESS",
            msg: `${user.mName} login successful` ,
            token: JWTToken         // look at the JWT token 
        })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'FAIL',
            msg: '[Server] Something went wrong ... ',
            error: err
        })
    }
})