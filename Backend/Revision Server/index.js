// Basics of Express JS 

const express = require('express') ;           
const app = express() ;                        
const port = 8000 ;

app.get('/' , (req,res) => {
    res.send("Hello World !")                       
})

app.get('/senpai' , (req,res) => {
    res.send("Hello Soma Senpai") ;
})

app.get('/request' , (req,res) => {
    console.log(req);
    res.send("\n\nRequest Object :") ;
})


app.listen(port , (err) => {
    if(!err) {
        console.log(`Server is up and running at port ${port}`)
    }
})