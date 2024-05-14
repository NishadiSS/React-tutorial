import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Home() {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>home page</h1>
      <Link to="/Profile">Go to profile page</Link>
      <br></br>
      <Link to="/About">Go to about page</Link>
      <br></br>
      <Button onClick={()=>Navigate("/Profile")}>Profile</Button>
    </div>
  )
}
