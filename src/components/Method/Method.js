import React from 'react'
import './method.css'
import { FaLongArrowAltRight } from "react-icons/fa";
const Method = () => {
    return (
        <div className='webMethod'>
            <div className='webMethodContainerA'>
                <div>Automate your outreach</div>
                <h1>Learn my simple method for attracting clients</h1>
                <p>This toolkit unveils my secret to a fully automated cold outreach system using OpenAI & Zapier. After three months of perfecting this automation, i"m sharing my proprietary setup with you-- from making initial contact to setting up acall to close the deal. Unlike other AI tools that require constant intervention, my system handles everything autonomously until you need to step in, if at all Let me show you how to turn cold leadds into hot prospects.</p>
                <button>Show me more <FaLongArrowAltRight /></button></div>
            <div className='webMethodContainerB'>
                <div className='word'>Turn</div>
                <div className='wordImage'>c<img className='img1' src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/66685544389316abf79ca761_cold-emoji.svg'/><span className='span1'>ld</span></div>
                <div className='word'>outreach</div>
                <div className='word'>into</div>
                <div className='wordImage'>h<img className='img2' src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/666856cb272af8edd28910de_hot-emoji.svg'/><span className='span2'>t</span></div>
                <div className='word'>outreach.</div>   
            </div>
        </div>
    )
}

export default Method
