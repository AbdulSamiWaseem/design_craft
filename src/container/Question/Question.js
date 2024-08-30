import React, { useState } from 'react'
import { FaArrowLeft, FaArrowDown } from "react-icons/fa";
import './question.css'
const Question = ({ index,question,detail,selected, setSelectedIndex }) => {
  return (
    <div className='webQuestion'>
      <div className='webQuestionContainer'>
        <div className='webQuestionA'>
          {question}</div>
        <div>
          {selected != index 
            ?<FaArrowLeft className="arrowLeft" onClick={() => { setSelectedIndex(index) }} /> 
            :<FaArrowDown className="arrowDown" onClick={() => { setSelectedIndex(-1) }} />
          }
        </div>
      </div>
      <div className='webQuestionDetail'>
        {selected == index
          ? <p><br />{detail}</p>
          : null
        }
      </div>


    </div>
  )
}

export default Question
