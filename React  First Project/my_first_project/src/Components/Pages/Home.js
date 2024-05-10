import React from 'react'
import TopicBox from '../TopicBox'
import Content from '../Content'

export default function Home() {
  return (
    <div>
      <h1>home page</h1>

      <TopicBox name="Nish" age="25">
        <span>This is the description</span>
      </TopicBox>

      <TopicBox name ="meri" age="32">
        <button>This is a button</button>
      </TopicBox>
      
      <Content/>
    </div>
  )
}
