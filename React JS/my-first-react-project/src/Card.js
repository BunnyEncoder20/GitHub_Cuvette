import React from 'react'
// import './Card.css'

function Card(props) {
  return (
    <div className='Card' style={{border:"5px solid black",height:"170px",width:"230px"}}>
        <h1>{props.title}</h1>
        <p className='price'>₹{props.price}</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

export default Card 