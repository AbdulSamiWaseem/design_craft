import React, { useState } from 'react'
import Question from '../Question/Question';

const data = [
    {
        question:'Why choose DesignCraft.me over traditional design services?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    },
    {
        question:'What services do you provide?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    },
    {
        question:'What is your communication process for projects?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    },
    {
        question:'How can I get started with DesignCraft.me?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    },
    {
        question:'What if I have just one design request?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    },
    {
        question:'How do you maintain high-quality designs with multiple clients?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    },
    {
        question:'How does the DesignCraft.me Referral Program work?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    },
    {
        question:'Do you offer on-going support after a project is completed?',
        answer:'Our monthly subscription and design sprint models eliminate fixed contracts, hourly rates, and large salaries. You choose the design package that best fits your needs, and we deliver high-quality desins without the overhead of traditional services. Every project is driven by your choive, steering'
    }

]

const Accordian = () => {
    const [selectedIndex,setSelectedIndex]=useState(-1);
  return (
    <div className='webAccordian'>
       { data.map((item,index)=>{
        return(
            <Question index={index} question={item.question} detail={item.answer} selected={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        )
       })
        }
    </div>
  )
}

export default Accordian
