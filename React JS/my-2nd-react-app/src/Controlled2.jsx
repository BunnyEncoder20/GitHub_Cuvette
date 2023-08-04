import React from 'react';
import { useState } from 'react';

function Controlled2()  {

    const [values, setValues] = useState({
        fname:'',
        lname:''
    });

    const changeHandler = (e) => {
        let {name, value} = e.target ;  //new way to getting name & value

        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted sucessfully !');
    }

    return (
        <div>
            <h4>Controlled Componenet [Mulitple input from form] </h4>
            <form onSubmit={handleSubmit}>
                <input type="text" name='fname' placeholder='First name' onChange={changeHandler}/>
                <br /><br />
                <input type="text" name='lname' placeholder='Last name' onChange={changeHandler}/>
                <br /><br />
                <button type='Submit'>Submit</button>
            </form>
        </div>
    );
}

export default Controlled2;
