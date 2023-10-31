import React from 'react';
import { useRef } from 'react';

function Uncontrolled() {

    let fnameRef = useRef(null);
    let lnameRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submit Handler Envoked')
        console.log("fname : ",fnameRef.current.value)
        console.log("lanme : ",lnameRef.current.value)
    }
    
    return (
        <div>
            <h4>Uncontrolled Component</h4>   
            <form onSubmit={submitHandler}>
            <input type="text" name='fname' placeholder='First name' ref={fnameRef}/>
                <br /><br />
                <input type="text" name='lname' placeholder='Last name' ref={lnameRef}/>
                <br /><br />
                <button type='Submit'>Submit</button>
            </form>
        </div>
    );
}

export default Uncontrolled;
