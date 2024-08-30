import React, { useState } from 'react'
import { FaFire } from "react-icons/fa6";
import Sprint from '../../container/sprint/Sprint';
import Monthly from '../../container/monthly/Monthly';
import Circle from '../../container/Circle/Circle';
import './design.css'
import Call from '../../container/Call/Call';
const Design = () => {
    const [selected, setSelected] = useState('sprint');
    return (
        <div className='webDesign' id='packages'>
            <Circle
                url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533fa6b6a9176ae6b93c786_yellow-small.svg'
                style={{
                    top: -60,
                    left: 120,
                    width: "16rem",
                }}
            />
            <Circle
                url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533f6a6383c4338fb8b9a9a_coral-small.svg'
                style={{
                    top: -50,
                    left: -250,
                    width: "40rem",
                    zIndex:1,
                }}
            />
             <Circle
                url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536af3169c42ee5d5c74187_royal-blue-xsmall.svg'
                style={{
                    bottom:150,
                    right:0,
                    width: "6rem",
                }}
            />
            <div className='webDesignHeading'><h1>Design Packages</h1></div>
            <div className='webDesignDetail'><p>Which plan works for you?</p></div>
            <div className='webDesignBtn'>
                <button onClick={() => { setSelected("sprint") }} className={`${selected == 'sprint' && 'active'}`} ><FaFire /> Sprint</button>
                <button onClick={() => { setSelected("monthly") }} className={`${selected == 'monthly' && 'active'}`}>Monthly</button>
            </div>
            <div className='webDesignInfo'>
                <div className='webDesignInfoPkg'>
                    {selected == 'sprint'
                        ? <Sprint />
                        : <Monthly />

                    }</div>
                <div className='webDesignInfoDetail'>
                    <Call />
                    <div className='webDesignInfoRefer'>
                        <h1>Share the love!</h1>
                        <p>Refer a friend and earn free design time with each referral. It's our way of saying thanks for spreading the word</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Design
