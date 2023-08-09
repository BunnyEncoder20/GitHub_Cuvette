import {useState,useEffect} from 'react'
import Controlled from './Controlled' 
import Controlled2 from './Controlled2';
import Uncontrolled from './Uncontrolled';
import MyComponents from './MyComponents';
import ParentComponent from './ParentComponent';

import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import { useRef } from 'react';
import useMyHook from './useMyHook';
import myContext from './myContext';
import Counter from './Counter';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(18);
  const [email, setEmail] = useState('');

  let validation = (e)=>{
    // validate the form here
    e.preventDefault();
    console.log('Validating the Form...');

    if(name.length<3 || name.length>15)
      alert("Name should be between 3-15 characters") ;
  }

  let [ formData, setFormData] = useState({
    name:"",
    age:0,
    email:""
  }) ;

  let handleChange = (e)=>{
    console.log(e.target.name);
    console.log(e.target.value);

    setFormData({
      ...formData,    // = tells to import already set values for formData and update the below mentioned variable with new value
      [name]:e.target.value
    })
  }

  let [count, setCount] = useState(0);
  let [click, setClick] = useState(0);
  // Used when you want to fetch something whenever there is change on the page  
  useEffect(()=>{
    console.log("useEffect was called");
  })
  // used when you want to fetch something when the page loads at the start
  useEffect(()=>{
    console.log("UseEffect Only called at the Mounting phase");
  })
  // used when something fetched by clicking on a button 
  useEffect(()=>{
    console.log("useEffect called for updation of count state");
  },[count])
  // used when you want to fetch / do something when the component unmounts 
  useEffect(()=>{
    return()=>{
      console.log("useEffect called when component was unmounted")
    }
  })

  let inputRef = useRef(null)   //creating a inputref null is default value for it 
  const submit = () => {
    console.log("The value of input was : ", inputRef.current.value);   //convention to get current data in the ref 
  }

  useMyHook("Changed using my custom hook !")

  let [counter, setCounter] = useState(0);

  return (
    <>  
      <h1><u>Forms in React</u></h1>
      <form onSubmit={validation}>
        Name: <input type="text"name='name' onChange={(e)=>{setName(e.target.value)}}/> <br />
        Age : <input type="text" name='age' onChange={(e)=>{setAge(e.target.value)}}/> <br />
        email : <input type="text" name='email' onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        <button type='submit'>Submit</button>
      </form>

      <button onClick={ ()=>{console.log("button clicked")} } >Click for Event</button>

      <br/> <br/>
      <form>
        Name2: <input type="text"name='name2' onChange={handleChange} /> <br />
        Age2 : <input type="text" name='age2' onChange={handleChange}/> <br />
        email2 : <input type="text" name='email2' onChange={handleChange}/> <br />
        <button type='submit'>Submit</button>
      </form>

      <br /><br />

      <h3><u>Class 8 Content</u></h3>
      <Controlled/>
      <Controlled2/>
      <Uncontrolled/>

      <br /><br />

      <h3><u>Class 9 Content</u></h3>
      <MyComponents/>
      <ParentComponent/>


      <br /><br />

      <h3><u>Class 10 Content</u></h3>
        <Routes>
          <Route path="/" element={<HomePage/>} />\
          <Route path='/about' element={<AboutPage/>} />
        </Routes>

        <br /><br />

        <h3><u>Class 12 Content</u></h3>
        <button onClick={()=>(setCount(count+1))}>Count +1</button>
        <button onClick={()=>(setClick(click+1))}>Click +1</button>
        <br />
        <input type="text" placeholder='Enter the text here' ref={inputRef}/>
        <button onClick={submit}>Submit</button>

        <br /><br />

        <h3><u>Class 13 Content</u></h3>
        <myContext.Provider value={{counter, setCounter}}>
          <Counter/>
        </myContext.Provider>
    </>
  );
}

export default App;
