import React from 'react'
import './loader.css'
const Loader = (props) => {
    return (
        <div className='webLoaderContainer'>
            <div className='webLoader' />
            <h2 className='webLoaderData'>
                {props.data}
            </h2>
        </div>
    )
}

export default Loader
