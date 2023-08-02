import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(18);
  const [email, setEmail] = useState('');

  return (
    <>  
      <h1><u>Forms in React</u></h1>
      <form>
        Name: <input type="text"name='name' onChange={(e)=>{setName(e.target.value)}}/> <br />
        Age : <input type="text" name='age' onChange={(e)=>{setAge(e.target.value)}}/> <br />
        email : <input type="text" name='email' onChange={(e)=>{setEmail(e.target.value)}}/> <br />
      </form>
      <button onClick={ ()=>{console.log("button clicked")} } >Click for Event</button>
    </>
  );
}

export default App;
