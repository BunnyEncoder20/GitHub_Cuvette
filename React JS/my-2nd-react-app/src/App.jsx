import {useState} from 'react'
import Controlled from './Controlled' 
import Controlled2 from './Controlled2';
import Uncontrolled from './Uncontrolled';
import MyComponents from './MyComponents';
import ParentComponent from './ParentComponent';


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
    </>
  );
}

export default App;
