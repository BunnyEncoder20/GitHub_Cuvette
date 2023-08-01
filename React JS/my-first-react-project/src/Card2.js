import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Card'

export default class Card2 extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      stockCount : this.props.stock
    }

    this.decrementStock = ()=>{
      this.setState({
        stockCount: this.state.stockCount-1 
      })
    }
  }

  render() {
    return (
      <div className='Card' style={{border:"5px solid red",height:"200px",width:"230px",padding:"10px"}}>
        <h1>{this.props.title}</h1>
        <p className='price'>Price : ₹{this.props.price}</p>
        <p className='stock'>Stock : {this.props.stock}</p>
        <p><button onClick={this.decrementStock}>Add to Cart</button></p>
      </div>
    )
  }
}

Card2.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number
}

Card2.defaultProps = {
    title : "Product",
    price : 0,
    stock: 0
}