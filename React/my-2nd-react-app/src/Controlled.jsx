import React from 'react';
import { useState } from 'react';

function Controlled () {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleFnameChange = (e) => {
        setFname(e.target.value) ;
    }

    const handlLnameChange = (e) => {
        setLname(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted sucessfully !');
    }

    return (
        <div>
            <h4>Controlled Component</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fname} onChange={handleFnameChange} name='fname' placeholder='Enter First Name'/>
                <input type="text" value={lname} onChange={handlLnameChange} name='lname' placeholder='Enter Last Name'/>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    );
}

export default Controlled;

