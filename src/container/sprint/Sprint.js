import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import './sprint.css'
const Sprint = () => {
  return (
    <div className='webSprint'>
      <div className='webSprintHeader'>One-time payment</div>
      <h1>$3,995</h1>
      <p>30 days of unlimited design services</p>
      <p> No contracts, no hourly rates</p>
      <h3>What's included </h3>
      <ul>
        <li>One request at a time</li>
        <li>2 day delivery</li>
        <li>1:1 communication</li>
        <li>Webflow development</li>
        <li>Extended plan available</li>


      </ul>
      <div className='webSprintBtn'>
        <button>Get Started</button>
      </div>
    
    </div>
  )
}

export default Sprint
