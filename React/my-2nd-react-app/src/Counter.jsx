import React,{useContext} from 'react'
import myContext from './myContext'

function Counter() {
    let dataFromContext = useContext(myContext) ;
  return (
    <div>
        <h1>{dataFromContext.counter}</h1>
        <button onClick={()=>{dataFromContext.setCounter(++dataFromContext.counter)}}>Count +1</button>
    </div>
  )
}

export default Counter