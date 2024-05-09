import React from 'react'
import './topicbox.css'

export default function TopicBox() {
  const topic = "My channel name is CodeNish"

  //const a=5;
  //const b=10;
  //const c=a+b;

  //const foodprices = {rice:"500" , noodles:"350"}

  return (
    <div>
      <div className="topicBox">
        <span className='text'> {topic} </span>
      </div>
    </div>
  )
}
