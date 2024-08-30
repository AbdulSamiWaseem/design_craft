import React, { useState } from 'react'
import { FaArrowLeft, FaArrowDown } from "react-icons/fa";
import Accordian from '../../container/Accordian/Accordian';
import Circle from '../../container/Circle/Circle';
import './questions.css'
const Questions = () => {
  const [arrow, setArrow] = useState([true]);
  return (
    <div className='webQuestions'>
      <Circle
        url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533f8dfe7a6dfe0f1f63c81_pink-small.svg'
        style={{
          top: 80,
          left: 0,
          width: "8rem",
        }}
      />
       <Circle
        url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6533fa6b6a9176ae6b93c786_yellow-small.svg'
        style={{
          top: 0,
          left: 0,
          width: "18rem",
          zIndex:-2,
        }}
      />
      <Circle
        url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536ae055faaa8d8414a88ed_white-xbig.svg'
        style={{
          bottom: "20%",
          right: '4%',
          width: "4rem",
        }}
      />
      <Circle
        url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536a86cce997f122c6d4c36_blue-small.svg'
        style={{
          top: '28%',
          right: 0,
          width: "12rem",
        }}
      />
      <Circle
        url='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6536aae359036a1400c9662e_purple-small.svg'
        style={{
          top: "32%",
          left: "-8%",
          width: "30rem",
        }}
      />
      <div>
        <h1>Commonly asked questions</h1></div>
      <div className='webQuestionsDetail'>
        <Accordian/>

     </div>
    </div>
  )
}

export default Questions
