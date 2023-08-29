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
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
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

// app.get('/soma' , (req,res) => {
//     res.sendFile(__dirname+'/profile.html')
// })

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
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKMxDoUg9xG2fuWCnRDuCc3TfbAOhc7YhWw&usqp=CAU"
    }
  )
})  
app.get('/soma' , (req,res) => {
  res.render('profileTemplate' , {
      "id": 2,
      "email": "soma@gmail.com",
      "first_name": "Soma",
      "last_name": "",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcqu4xZu-j4C0988_Mithjj8EenYPTI7aog&usqp=CAU"
    }
  )
})  
app.get('/senpai' , (req,res) => {
  res.render('profileTemplate' , {
      "id": 3,
      "email": "senpai@gmail.com",
      "first_name": "Senpai",
      "last_name": "",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sjxTW9GqBq8VOEbKHX0Tsr-4-jl8Cfmsyg&usqp=CAU"
    }
  )
})  
