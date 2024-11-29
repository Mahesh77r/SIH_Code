import React, { useState } from 'react';
import axios from 'axios'

function App() {

  const [data,setData] = useState(
    {
      name:"",
      phone:"",
      address:""
    }
  )
 // const{ name,address,phone }=data;
    const changeHandler =(e)=>{ setData({...data, [e.target.name]: e.target.value})}

 
  
  const addNewNumber = async() => {
    await axios.post('http://localhost:8080/add-phone',data)
  }

  
  return (
    <div className="container">

        <label htmlFor="">Name: </label>
        <input type="text" name='name' value={data.name}  onChange={(e) => changeHandler(e)}/><br/><br/>
        <label htmlFor="">Phone: </label>
        <input type="number" name='phone' value={data.phone} onChange={(e) => changeHandler(e)}/><br/><br/>
        <label htmlFor="">Address: </label>
        <input type="text" name='address' value={data.address} onChange={(e) => changeHandler(e)}/><br/><br/>

        <button onClick={addNewNumber}>Add New Number</button>

    </div> 
  );
}

export default App;