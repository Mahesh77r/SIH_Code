
import React from 'react';

import { NavLink , Outlet} from 'react-router-dom'
import Profileform from './Profileform';

export default function Profile() {
    

    return (
        <section >
         
  <div className="container py-5 " >
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            
            <NavLink activeclassname="active" className='breadcrumb-item' to="/userDetails/profile" exact>Home</NavLink>
            <NavLink activeclassname="active" className='breadcrumb-item' to="/userDetails/profile/profileform2" >User</NavLink>
            {/* <NavLink activeclassname="active" className='breadcrumb-item' to="/" >Home</NavLink> */}

      
          </ol>
        </nav>
        
        <Outlet/>
      </div>
    </div>
     
    
      </div>


      
     
</section>
    );
};

