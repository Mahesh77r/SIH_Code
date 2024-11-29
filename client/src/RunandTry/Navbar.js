import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

import Login from './Login'


export default function Navbar() {
  const [open, setOpen] = useState(false);
const openDialog =()=>
{
  setOpen(true)
}

  return (
    <>
    <div style={{display: 'flex'}}>
      <div className='nav'>
      <NavLink activeclassname="active" className='link' to="/add-phone" >Form</NavLink>
      <NavLink activeclassname="active" className='link' to="/get-phone" >Profile</NavLink>
    </div>
    <button onClick={()=>openDialog()}>Login</button>
    </div>
    <Login open={open} setOpen={setOpen}/>
    </>
  )
}


