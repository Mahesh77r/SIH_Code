import React, { useState } from "react";
import axios from "axios";

import { authenticateLogin, authenticateSignup } from "./Api";

import { Dialog } from "@mui/material";
function Login({ open, setOpen }) {
  const [data, setData] = useState({
    name: "",
    phone: "",
  });
  // const{ name,address,phone }=data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const loginUser = async () => {
    let response= await authenticateLogin(data);
   };

  const addNewNumber = async () => {
    await axios.post("http://localhost:8080/login", data);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="container">
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <br />
        <label htmlFor="">Phone: </label>
        <input
          type="number"
          name="phone"
          value={data.phone}
          onChange={(e) => changeHandler(e)}
        />
        <br/>
        <br/>
        <button onClick={(e) => loginUser(e)}>Login</button>
      </div>
    </Dialog>
  );
}

export default Login;
