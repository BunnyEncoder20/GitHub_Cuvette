import React from 'react'

export default function Header() {
  return (
    <>
        <div className='HeaderClass' style={{color:"red",fontSize:"20px"}}>
            Header component using react functional component creation 
        </div>
        { (10==10) ? "True condition" : "False Condition" }
        <br/>
        { (20==10) ? "True condition" : "False Condition" }
    </>
  )
}
