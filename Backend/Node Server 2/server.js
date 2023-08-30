const express  = require('express');
const app = express()

const ejs = require('ejs')          // importing ejs 
app.set('view engine' , 'ejs' )   // setting the template to ejs 

app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000")
})

const dummyUsersDB = [
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

// app.get('/soma' , (req,res) => {
//     res.sendFile(__dirname+'/profile.html')
// })

app.get('/',(req,res)=>{
  res.send('Server Up and Running')
})

app.get('/temp' , (req,res) => {
  res.render('temp')    // when using ejs render, server knows that it is gonna take the files from the view folder itself. Hence it is recommended to make a view folder 
})

app.get('/Topic1' , (req,res) => {
  res.render('temp' , { heading: 'Soma' } )    // sending object of variables and their values to the ejs page 
})
app.get('/Topic2' , (req,res) => {
  res.render('temp' , { heading: 'Senpai' })
})
app.get('/Topic3' , (req,res) => {
  res.render('temp' , { heading: 'Soma Senpai' })
})

app.get('/somya' , (req,res) => {
  res.render('profileTemplate' , {
      "id": 1,
      "email": "somyaKumari@gmail.com",
      "first_name": "Somya",
      "last_name": "Kumari",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKMxDoUg9xG2fuWCnRDuCc3TfbAOhc7YhWw&usqp=CAU",
      "likescake" : false
    }
  )
})  
app.get('/soma' , (req,res) => {
  res.render('profileTemplate' , {
      "id": 2,
      "email": "soma@gmail.com",
      "first_name": "Soma",
      "last_name": "",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhoTgRLmdkSG3r4xRH34ia_voV__Zjiaw0Q&usqp=CAU",
      "likescake" : true
    }
  )
})  
app.get('/senpai' , (req,res) => {
  res.render('profileTemplate' , {
      "id": 3,
      "email": "senpai@gmail.com",
      "first_name": "Senpai",
      "last_name": "",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sjxTW9GqBq8VOEbKHX0Tsr-4-jl8Cfmsyg&usqp=CAU",
      "likescake" : true
    }
  )
})  
app.get('/George' , (req,res)=>{
  let details = dummyUsersDB.find(user=>user.first_name === "George");
  console.log(details);
  res.render('profileTemplate', details)
})
app.get('/Janet' , (req,res)=>{
  let details = dummyUsersDB.find(user=>user.first_name === "Janet");
  console.log(details);
  res.render('profileTemplate', details)
})
app.get('/Emma' , (req,res)=>{
  let details = dummyUsersDB.find(user=>user.first_name === "Emma");
  console.log(details);
  res.render('profileTemplate', details)
})
app.get('/Eve' , (req,res)=>{
  let details = dummyUsersDB.find(user=>user.first_name === "Eve");
  console.log(details);
  res.render('profileTemplate', details)
})
app.get('/Charles' , (req,res)=>{
  let details = dummyUsersDB.find(user=>user.first_name === "Charles");
  console.log(details);
  res.render('profileTemplate', details)
})
app.get('/Tracey' , (req,res)=>{
  let details = dummyUsersDB.find(user=>user.first_name === "Tracey");
  console.log(details);
  res.render('profileTemplate', details)
})




// Request Parameters 
app.get('/example/:parameter' , (req,res) => {
  console.log(req.params.parameter)
  res.json({value:req.params.parameter})
})

// Making all the user fucntions into a single function : 
app.get('/profiles/:username',(req,res)=>{
  let username = req.params.username ;
  // console.log(username)
  let userdetails = dummyUsersDB.find(user=>user.first_name === username);
  
  if (userdetails) {
    console.log(userdetails);
    res.render('profileTemplate', userdetails)
  }
  else {
    console.log('User was not found')
    res.render('notFound')
  }
})
