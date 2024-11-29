
import React,{useState} from 'react'

import { useNavigate } from "react-router-dom";
import './Firstpage.css';


// import Signin from '../GroundForm/Signin'
// import Demo from '../Demo'

function Firstpage() {

    const navigate = useNavigate ();
    const Login = () => {
        navigate("/login")
    }
    const GroundAuthority = () => {
        navigate("/groundauthorityregister")
    }

    
  
    const Club = () => {
        navigate("/clubregister")
    }

    const EventOrganizer = () => {
        navigate("/eventorgregister")
    }
    const Dashboard = () => {
        navigate("/dashboard")
    }
    const [open, setOpen] = useState(false);
    const openDialog =()=>
{
  setOpen(true)
}
    
    return (
<>
                        <section className="header">
                            

                            <div className="content">
                                <h1>Fitness & <br /><span> Sports</span></h1>
                                <p className="par">The population of India majorly comprises of youths.<br /> Therefore,
                                    it is necessary not only to address problems <br /> faced by the youths but also provide
                                    them opportunities to grow.
                                </p>

                                <div className="form">

                                    {/* <center> <Form/></center>  */}
                                    <button onClick={GroundAuthority}> Register as Ground Authority  </button><br />
                                    <button onClick={EventOrganizer}> Register as Event Organiser  </button><br />
                                    <button onClick={Club}> Register as Club Organiser  </button><br /><br />
                                    {/* <NavLink activeClassName="active" className='link' to="//groundAuthorityregistion" >Ground Authority</NavLink>
                                    <NavLink activeClassName="active" className='link' to="/club" >Club </NavLink>
                                    <NavLink activeClassName="active" className='link' to="/eventorganizer" >Eventorganizer</NavLink> */}
                                    <center><button onClick={Login}>Login</button></center>
                                    {/* <Signin open={open} setOpen={setOpen} /> */}
                                {/* <Demo open={open} setOpen={setOpen}/> */}
                                
                                </div>

                            </div>

                        </section>
            </>

            );
}

            export default Firstpage;