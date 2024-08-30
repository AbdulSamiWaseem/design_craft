import React from 'react'

const Circle = (props) => {
  return (
     <img data-aos="zoom-in" src={props.url} style={{zIndex:-1,overflow:'hidden',position:'absolute',...props.style}} />
  
  )
}

export default Circle
