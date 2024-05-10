import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
  const topic = "My channel name is CodeNish"

  //const a=5;
  //const b=10;
  //const c=a+b;

  //const foodprices = {rice:"500" , noodles:"350"}

  return (
    <div>
      <div className="topicBox">
        <span className='text'> My name is {props.name}  and {props.age} years.</span>
        {props.children}
      </div>
    </div>
  )
}
