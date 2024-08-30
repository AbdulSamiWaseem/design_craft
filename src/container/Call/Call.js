import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import './call.css'
const Call = () => {
    return (
        <div className='webCall'>
            <FiPhoneCall size={50} />
            <h1>Let's talk design</h1>
            <p>Call us to discuss your design goals and discover how DesignCraft.me can uniquely serve your needs.</p>
            <div className='webCallArrow'>
                <div className='circle' />                
                <FaArrowRight size={20} style={{zIndex:1}} />
                <div className='webCallArrowText'>Schedule a call</div>
            </div>
        </div>
    )
}

export default Call
