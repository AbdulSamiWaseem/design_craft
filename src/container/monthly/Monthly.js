import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import './monthly.css'
const Monthly = () => {
  return (
    <div className='webMonthly'>
    <p className='webMonthlyTop'>Subscription</p>
    <h1>$4,195<span>/month</span></h1>
    <p>No minimum or long term commitments</p>
    <p>Pause or Cancel anytime</p>
    <h3>What's included</h3>
    <ul>
      <li>One request at a time</li>
      <li>2 day delivery</li>
      <li>Async communication</li>
      <li>Webflow development</li>
      <li>Upgrade available</li>
    </ul>
    <div className='webMonthlyBtn'>
        <button>Get Started</button>
      </div>
  </div>
  )
}

export default Monthly
