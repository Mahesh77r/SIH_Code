import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Map from "../../components/Map/Map";
import Navbar from '../../components/Navbar'
import DataTable from "../../pages/GroundAuthority/InventoryManagment";
import ManageClub from "../../pages/GroundAuthority/ManageClub";
import ViewApplication from "../../pages/GroundAuthority/ViewApplication";
import Profile from "../../components/profileCom/Profile";
import Profileform from "../../components/profileCom/Profileform";
import Profileform2 from "../../components/profileCom/Profileform2";

export default function GroundDashbord() {
  return (
    <>
      
<Navbar/>
      <Routes>
        <Route path="/" element={<Map />} />

        <Route path="/profile" element={<Profile />}>
        <Route path="/profile" element={<Profileform />} />
        <Route path="/profile/profileform2" element={<Profileform2 />} />
        </Route>
        <Route path="/dataTable" element={<DataTable />} />
        <Route path="/manageClub" element={<ManageClub />} />
        <Route path="/viewApplication" element={<ViewApplication />} />

        {/* <Route path='/api/crud' element={<Profile/>}/> */}
      </Routes>
    </>
  );
}
