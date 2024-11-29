// import './App.css';
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom'

//Components
import Header from './components/Header'
import Map from './components/Map/Map'


//FirstPage And Logins

import FirstPage from './pages/Firstpage/Firstpage'
import LoginNav from './components/Logins/LoginNav'
import GroLogin from './components/Logins/GroundLogin'
import EventLogin from './components/Logins/EventLogin'
import ClubLogin from './components/Logins/ClubLogin'


//Ground Registration Form

 import Form1 from './pages/GroundAuthority/Registration/Form1'
// import Form2 from './pages/GroundAuthority/Registration/Form2'
// import Form3 from './pages/GroundAuthority/Registration/Form3'



//Ground Dashboard
// import GroundDashboard from './pages/GroundAuthority/GroundAuthorityDashboad'

//Club

import ClubReg from './pages/Club/ClubRegistration'
import Enroll from './pages/Club/ClubEnrollment'


//Event
// import EventReg from './pages/EventOrganizer/EventOrganizerRegistration'
// import Host from './pages/EventOrganizer/HostEventApplication'

// import Addmore from './pages/GroundAuthority/Registration/Addmore'
function App() 
{
  return (
   <>
   <Header/>

    <Routes>
    <Route path='/' element={<FirstPage/>}/>
    <Route path='/groundauthorityregister' element={<Form1/>}/>
    <Route path='/eventorgregister' element={<ClubReg/>}/>
    <Route path='/clubregister' element={<Enroll/>}/>
    <Route path='/login' element={<LoginNav/>}/>
      <Route path='/login/groundAuthoritylogin' element={<GroLogin/>}/>
      <Route path='/login/eventorganizerlogin' element={<EventLogin/>}/>
      <Route path='/login/clublogin' element={<ClubLogin/>}/>
      {/* <Route path='/login/npfailogin' element={<NpfaiLogin/>}/> */}
</Routes>

{/* <Map/> */}


</>
  );
}

export default App;

