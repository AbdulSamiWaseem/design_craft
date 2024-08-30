import React from 'react'
import './info.css'
import Box from '../../container/box/Box.js'
import Circle from '../../container/Circle/Circle'
const Info = () => {
    return (
        <div className='webInfo'>
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536a86cce997f122c6d4c36_blue-small.svg'
                style={{
                    top:0,
                    left:10,
                    width: '10rem',
                }}
            />
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533f8dfe7a6dfe0f1f63c81_pink-small.svg'
                style={{
                    top:100,
                    left:130,
                    width: '5rem',
                }}
            />
             <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533fa6b6a9176ae6b93c786_yellow-small.svg'
                style={{
                    top:60,
                    right:100,
                    width: '3rem',
                }}
            />
            <div>
            <h1>From concept to reality in <span>2 days </span>or less</h1>
            <p>We'll take your creative ideas and bring them to life faster than you can slap a tick!</p>
            </div>
            <div className='webInfoBox'>
                <div>
                    <Box flag={true} data={1} title={"Request"} detail={"Submit you design requests one at a time through your personal design task board."} />
                </div>
                <div>
                    <Box flag={true} data={2} title={"Receive"} detail={"Get you design in 48 hours or less. We ensure fast, precise delivery of your tailored design task."} />
                </div>
                <div>
                    <Box flag={true} data={3} title={"Approve"} detail={"Enjoy your new design or request unlimited revisions until it's exacty to your liking."} />
                </div>
            </div>
        </div>
    )
}

export default Info
