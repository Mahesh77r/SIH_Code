import React from "react";

import { NavLink , Outlet} from 'react-router-dom'



export default function Navbar() {
 
  return (
    <div>
      
      
      <div className='nav'>
      <NavLink activeclassname="active" className='link' to="/userDetails/profile" >Profile</NavLink>
      <NavLink activeclassname="active" className='link' to="/userDetails/" >Home</NavLink>
      <NavLink activeclassname="active" className='link' to="/userDetails/dataTable" >Inventory Managment</NavLink>
      <NavLink activeclassname="active" className='link' to="/userDetails/manageClub" >Club Manage</NavLink>
      <NavLink activeclassname="active" className='link' to="/userDetails/viewApplication" >View Application</NavLink>

    
    </div>
    <div className='line'></div>
    </div>

  )

}