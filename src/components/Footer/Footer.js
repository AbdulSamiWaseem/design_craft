import React from 'react'
import './footer.css'
import { FaArrowRight } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='webFooter'>
            <div className='webFooterSectionA'>
                <h1>Join the craft.</h1>
                <p>Discover how DesignCraft.me can align perfectly with your unique design needs.</p>
                <div className='webFooterCall'>
                    <div className='circle' />
                    <FaArrowRight size={20} style={{ zIndex: 1 }} />
                    <div className='webFooterCallText'>Schedule a call</div>
                </div>
            </div>
            <div className='webFooterSectionB'>
                <h1>hello@designercraft.me</h1>
                <p>Fine tunning design since 2009</p>
            </div>
            <div className='webFooterSectionC'>
                <div>
                    <h3>Designcraft.me</h3>
                    <p><FaRegCopyright/> 2024</p>
                </div>
                <div className='webFooterLinks'>
                    <div><a href='/terms'>Terms & Condition</a></div>
                    <div><a href='/policy'>Privacy Policy</a></div>
                    <div><a href='/contact'>Contact me</a></div>
                    <div><a href='/client'>Client Login</a></div></div>
            </div>
        </div>
    )
}

export default Footer
