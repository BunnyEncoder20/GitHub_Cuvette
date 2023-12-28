const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bcrypt = require('bcrypt');

const app = express()
app.set('view engine', 'ejs')
dotenv.config()

// setting up middlewares 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// making mongoose schema 
const memberModelref = mongoose.model('Member', {
    mName: String,
    mEmail: String,
    mPassword: String
})

// Starting the server 
app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log(`[Server] Running at http://localhost:${process.env.PORT}\n[MongoDB] Connected to DB`))
        .catch(err => console.log('[Server] Error occurred while starting the server : \n', err))
})

// initial get request 
app.get('/server5', (req, res) => {
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
        // else return the user info : 
        res.json({
            Status: "SUCCESS",
            msg: `${user.mName} login successful`
        })

    }
    catch (err) {
        res.status(500).json({
            status: 'FAIL',
            msg: '[Server] Something went wrong ... ',
            error: err
        })
    }
})