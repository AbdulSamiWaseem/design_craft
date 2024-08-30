import React from 'react'
import Loader from '../loader/Loader'
import './box.css'
const Box = (props) => {
  return (

    <div className='webBox'>
      <h1>
      {props.flag
        ?<Loader data={props.data}/>
        :<img src={props.imgUrl}/>
      }
        {props.title}</h1>
        <p>{props.detail}</p>

      
    </div>
  )
}

export default Box
