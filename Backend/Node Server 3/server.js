const express = require('express')
const app = express()

const ejs = require('ejs')
app.set('view engine' , 'ejs')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

// These 2 middleware are important for the connection 
// remember that app.use() is used to attach middlewares (entity, which lies between client and server)
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('./public'))

app.listen(process.env.port , ()=>{
    mongoose
        .connect(process.env.mongodb_url)
        .then(()=> console.log("[Server] Sever is now Running \n[Server] Connection to DB established"))
        .catch((error)=>console.log(error))
})

app.get('/',(req,res)=>{
    res.send('Sever is Up and Runnig on localhost:3000')
})

// usecase of express.static : 
app.get('/download',(req,res)=>{
    // res.download(__dirname+'/public/chickn nuggit.jpeg')  // default way to mention a the path 
    res.download('public/chickn nuggit.jpeg')
})