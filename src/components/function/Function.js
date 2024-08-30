import React, { useState } from 'react';
import Box from '../../container/box/Box';
import './function.css';
import Circle from '../../container/Circle/Circle';
import { FaArrowLeft, FaArrowDown } from "react-icons/fa";
const Function = () => {
    const displayMenu = () => {
        return (
            <FaArrowDown />);


    }
    const [Arrow, setArrow] = useState(true)
    return (
        <div className='webFunction'>
            <Circle
                url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6537d2c327da773cc5201643_primary-blue.svg'
                style={{
                    top: -10,
                    left: -100,
                    width: "18rem",
                }}
            />
            <Circle
                url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6535765797cd72e2109aa9f3_orange-big.svg'
                style={{
                    top: -50,
                    right: 0,
                    width: "7rem",
                }}
            />

            <div className='webFunctionHeading'>
                <h1>What is it we do?</h1>
            </div>
            <div className='webFunctionContainerA'>
                <div><Box flag={false} imgUrl='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536af3169c42ee5d5c74187_royal-blue-xsmall.svg' title={"Design consultant"} detail={"Advice on design strategies to improve functionality and market appeal by conducting product audits to identify areas for improvement, enhancing user engagement and brand perception."} /></div>
                <div><Box flag={false} imgUrl='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533f8dfe7a6dfe0f1f63c81_pink-small.svg' title={"Web Design"} detail={"Website layouts (one-page/multi-page) with custom graphics and strategic content placement. Delivered as fully responsive and visually strikin websites, utilizing Webflow."} /></div>
            </div>
            <div className='webFunctionContainerB'>
                <div><Box flag={false} imgUrl='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6535765797cd72e2109aa9f3_orange-big.svg' title={"Branding"} detail={"Logo creation, comprehensivestyle guides, corporate identity, strategic brand messaging, and immersive eniviromental branding."} /></div>
                <div><Box flag={false} imgUrl='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536a86cce997f122c6d4c36_blue-small.svg' title={"Product Design"} detail={"User Interface design, interaction design, design refinement, prototyping, wireframing, product audit."} /></div>
            </div>
            <div className='webFuntionExtended'>
                <div className='webFuntionExtendedA'>
                    <div>
                        <img src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533fa6b6a9176ae6b93c786_yellow-small.svg' />
                    </div>
                    <div className='webFunctionContent'>
                        <div>
                            <h2>
                                Extended design services
                            </h2>
                        </div>
                        {Arrow
                            ? <FaArrowLeft className="arrow" onClick={() => { setArrow(false) }} />
                            : <FaArrowDown className='arrow' onClick={() => { setArrow(true) }} />
                        }

                    </div>
                </div>
                {!Arrow
                    ? <div data-aos="zoom-in-down" className='webFunctionExtendedB'>
                        <div className='webFunctionLists'>
                            <div className='webFunctionList'>
                                <p>Appstore graphics</p>
                                <p>Blog graphics</p>
                                <p>Brochures</p>
                                <p>Design systems</p>
                                <p>Digital Ads</p>
                            </div>
                            <div className='webFunctionList'>
                                <p>Icons</p>
                                <p>Mobile Apps</p>
                                <p>Packaging</p>
                                <p>Print design</p>
                                <p>Social Media Graphis</p>
                            </div>
                            <div className='webFunctionList'>
                                <p>Stickers</p>
                                <p>Stationary</p>
                                <p>T-Shirts</p>
                                <p>Tradeshow banners</p>
                                <a>Don't see it?<span>Let's chat</span></a>
                            </div>
                        </div>

                    </div>
                    : null
                }

            </div>
        </div>
    )
}

export default Function
