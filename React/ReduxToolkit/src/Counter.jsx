import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        < button onClick={() => dispatch(increment())} >
          Increment
        </button>
        <br />
        <h1>{count}</h1>
        <br />
        < button onClick={() => dispatch(decrement())} >
          Decrement
        </button>
      </div>
    </div>
  )
}