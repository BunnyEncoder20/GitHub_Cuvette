/*
initializing node js project 
npm init -y

installing express js in project 
npm install express 
*/

// Just some sample sample JS server code : 
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// Just some sample starter code for express js 
const express = require('express') ;

const app = express() ;

app.get('/' , (req,res) => {
    res.send("Hellow World UwU")
})

app.get('/about' , (req,res) => {
    // res.send("This is about page UwU")
    res.sendFile(__dirname+'/about.html') //returning an page 
})

app.get('/contact' , (req,res) => {
    // res.send("This is contact UwU")
    res.sendFile(__dirname+'/contact.html')
})

const dummyUsersDB = [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        //"avatar": "https://reqres.in/img/faces/1-image.jpg"
      },
      {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        //"avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        //"avatar": "https://reqres.in/img/faces/3-image.jpg"
      },
      {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        //"avatar": "https://reqres.in/img/faces/4-image.jpg"
      },
      {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        //"avatar": "https://reqres.in/img/faces/5-image.jpg"
      },
      {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        //"avatar": "https://reqres.in/img/faces/6-image.jpg"
      }
]

app.get('./users', (req,res)=>{
    res.send(dummyUsersDB);
})

app.get('./users/odd', (req,res)=>{
    res.send(dummyUsersDB.filter(user => user.id%2 != 0)); //only showing the odd users
})

app.get('./downloadlogo' , (req,res)=>{
    res.download(__dirname+'/chickn nuggit.jpeg')
})


app.listen(3000, ()=>{
    console.log('Sever running on port http://localhost:3000') ;
})


/*
    NOTE : 
        1. Me need to restart the server after each change 

        2. Cannot send file from res directly : we use __dirname
            - Eg :  res.sendFile(__dirname+'./about') 

        2. HTMl methods : 
            get (for reading)
            post (for creating )
            Push/Patch (for updating)
            delete (for deleting)
*/