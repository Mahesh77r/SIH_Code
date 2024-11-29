import React,{useEffect,useState} from 'react'
import axios from 'axios'
function Viewuser() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/get-phone').then(res => {
          setData(res.data.data.data)
      })
    },[])


    return (
      <div className="container">
  
        <h1>PhoneBook List</h1>
        {
          data.map((val,key) => {
            return <div key={key} className="phone" >
              <h1>{val.name}</h1>
              <h1>{val.address}</h1>
              <h1>{val.phone}</h1><br />
            </div>
          })
        }
  
      </div>
        
    );
}



export default Viewuser