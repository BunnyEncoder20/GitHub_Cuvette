import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import aboutpagecss from './about.module.css'

function AboutPage() {
  return (
    <div className={aboutpagecss.container}>
      <h4>I'm a AboutPage</h4>
      <Link to="/">Click to go to HomePage</Link><br />
      { moment().format() }
      <br /><br />
    </div>
  )
}

export default AboutPage    