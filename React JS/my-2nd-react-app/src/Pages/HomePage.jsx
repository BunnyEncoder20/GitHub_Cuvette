import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import homepagecss from './home.module.css'

function HomePage() {
  return (
    <div className={homepagecss.container}>
      <h4>I'm a HomePage</h4>
      <Link to="/about">Click to go to AboutPage</Link><br />
      { moment().format() }
      <br /><br />
    </div>
  )
}

export default HomePage