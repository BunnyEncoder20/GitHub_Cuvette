import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <div>I'm a HomePage</div>
      <Link to="/about">Click to go to AboutPage</Link>
    </>
  )
}

export default HomePage