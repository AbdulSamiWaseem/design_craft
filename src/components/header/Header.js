import React from 'react'
import './header.css'
import Circle from '../../container/Circle/Circle'

const Header = () => {
    return (
        <div className='webHeader'>
            <Circle
                url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536af3169c42ee5d5c74187_royal-blue-xsmall.svg'
                style={{
                    top: 0,
                    left: -70,
                    width: "18rem",
                    zIndex: 0,
                }}
            />
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536aae359036a1400c9662e_purple-small.svg'
                style={{
                    top: 0,
                    right: 0,
                    width: '12rem',
                    zIndex: 0,
                }}
            />
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533fa6b6a9176ae6b93c786_yellow-small.svg'
                style={{
                    top: 120,
                    right: 20,
                    width: '15rem',
                    zIndex: 0,
                }}
            />
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536a86cce997f122c6d4c36_blue-small.svg'
                style={{
                    top: 0,
                    left: "40%",
                    width: '3rem',
                    zIndex: 0,
                }}
            />
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533f6a6383c4338fb8b9a9a_coral-small.svg'
                style={{
                    top: 150,
                    left: 90,
                    width: '6rem',
                    zIndex: 0,
                }}
            />
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6535765797cd72e2109aa9f3_orange-big.svg'
                style={{
                    top: 80,
                    right: 130,
                    width: '2.5rem',
                    zIndex: 0,
                }}
            />
            <Circle url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533f8dfe7a6dfe0f1f63c81_pink-small.svg'
                style={{
                    top: 80,
                    left: "30%",
                    width: '1.5rem',
                    zIndex: 0,

                }}
            />
            <div className='webHeaderHeading'>Designcraft.me</div>
            <div className='webHeaderDetail'>
                <h1>We design beautiful products, faster</h1>
                <p>A premium design service that's accessible to all, without the premium price tag.</p>
            </div>
            <div className='webHeaderButton'>
                <button><a href='#packages'>See plans</a></button>
            </div>
        </div>
    )
}

export default Header
