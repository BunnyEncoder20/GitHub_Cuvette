import React from 'react'
import PropTypes from 'prop-types'
 
function Card(props) {
  return (
    <div className='Card' style={{border:"5px solid black",height:"170px",width:"230px"}}>
        <h1>{props.title}</h1>
        <p className='price'>₹{props.price}</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number.isRequired
}

Card.defaultProps = {
    title : "Product"
}

export default Card 