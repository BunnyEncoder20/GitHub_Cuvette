import React,{useState} from 'react'
import PropTypes from 'prop-types'
 
function Card({title, price, stock}) {
    let initialStock = stock
    // function decrementStock() {
    //     --stock;
    //     console.log(stock) ;
    // }

    let [stockCount, setStockCount] = useState(stock)

    function decrementStock() {
        setStockCount(--stockCount);
        console.log("Stock decreased : ",stockCount) ;
    }

    function resetStock () {
        setStockCount(initialStock) ;
    }
    

  return (
    <div className='Card' style={{border:"5px solid black",height:"200px",width:"230px",padding:"10px"}}>
        <h1>{title}</h1>
        <p className='price'>Price : ₹{price}</p>
        <p className='stock'>Stock : {stockCount}</p>
        <p><button onClick={decrementStock}>Add to Cart</button></p>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number
}

Card.defaultProps = {
    title : "Product",
    price : 0,
    stock: 0
}

export default Card 