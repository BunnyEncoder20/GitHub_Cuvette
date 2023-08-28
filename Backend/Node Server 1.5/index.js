const express = require('express') ;
const app = express() ;
const port = 3000 ;

const middleware = (req,res,next) => {
    console.log('[middleware] You just entered the middleware')
    req.customInfo = 20 ;
    next()  //lets you move over to the next page (main landing page)
}

app.use(express.static('public'))

app.listen(port , (err) => {
    if(!err) {
        console.log(`Server is up and running at port ${port}`)
    }
})

app.get('/' , (req,res) => {
    res.send("Hello World !")
})

app.get('/htmlpage' , middleware, (req,res) =>{
    res.sendFile(__dirname+'/index.html') 
    console.log("[htmlpage]",req.customInfo);
})

app.get('/shop' , (req,res)=>{
    console.log(req.query)
    res.send("Welcome to the shop !")
})

app.get('/users/:username' , (req,res)=>{
    console.log(req.params)
    res.send(`Welcome to the users page , ${req.params.username}`)
})