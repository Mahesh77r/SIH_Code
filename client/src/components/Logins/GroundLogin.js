import React,{useState} from 'react'
import Login from './Login'
import {groundLogin} from '../Api'
function GroundLogin() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async (e,res) => {
    e.preventDefault();
    let response= await groundLogin(data);
    console.log(JSON.stringify({
     response
   }));
   
     if(response.status===200)
     {
      // localStorage.setItem('token', dataa)
       alert(`login Successfull ${response.cperson}`)
      // let decoded = jwt_decode(res.credential);
       console.log(response);
       window.location.href = '/profile'
     }
    };
  return (
   <>
   
   <Login login={login} changeHandler={changeHandler} data={data}/>
   </>
  )
}

export default GroundLogin