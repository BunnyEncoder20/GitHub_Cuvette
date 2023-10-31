import './App.css'
import React,{useState, useEffect} from 'react'
import axios from 'axios'


function App() {

  let[fact,setFact] = useState("Loading fact...");
  // useEffect(()=>{
  //   fetchFacts();
  // },[])
  useEffect(()=>{
    axiosFacts();
  },[])

  const fetchFacts = () => {
    fetch('https://catfact.ninja/fact').then((resp)=>{
      // console.log(resp) ;  //remember this way we will not get the desized object we need . We need to convert it to the respective json also
      return resp.json()
    }).then((data)=>{
      console.log(data.fact)
      setFact(data.fact)
    }).catch((err)=>{
      alert('Something went wrong')
      console.log(err)
    })
  }

  const axiosFacts = () => {
    axios.get('https://catfact.ninja/fact').then((resp)=>{
      console.log(resp.data);   // here we can directly print the data, axios takes care of processing the json
      setFact(resp.data.fact);
    }).catch((err)=>{
      alert('Something went wrong')
      console.log(err)
    })
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{fact}</h1>
        <button className="button">
          <span onClick={axiosFacts}>Show More</span>
        </button>
      </div>
    </div>
  )
}

export default App
