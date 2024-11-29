import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css'
export default function Inventory() {


  // const[data,setData]=useState({
  //   description:"",
  //   temp:0, 
  //   temp_max: 0,
  //   temp_min: 0,
  //   humidity: 0,
  //   country: 'IN', sunrise: 0, sunset: 0,

  // })
  const [data, setData] = useState({
    itemname: "",
    year: "",
    date: "",
    inusequantity: "",
    totalquantity: "",
    condition: "",
    amount: ""

  })
const Delete = () =>
{

axios.post('https://localhost/Database/crud_html/delete.php',{itemname:data.itemname})
}

  const resu = axios.get('https://localhost/Database/crud_html/display.php')
    .then(res => {
      const i = 0
      setData({
        itemname: res.data.result[i].sid,
        year: res.data.result[i].sname,
        date: res.data.result[i].saddress,
        inusequantity: res.data.result[i].sclass,
        totalquantity: res.data.result[i].sphone,
        // condition: res.data.result[i].sid,
        // amount: res.data.result[i].sid,
        itemname1: res.data.result[1].sid,
        year1: res.data.result[1].sname,
        date1: res.data.result[1].saddress,
        inusequantity1: res.data.result[1].sclass,
        totalquantity1: res.data.result[1].sphone,
      
        itemname2: res.data.result[2].sid,
        year2: res.data.result[2].sname,
        date2: res.data.result[2].saddress,
        inusequantity2: res.data.result[2].sclass,
        totalquantity2: res.data.result[2].sphone,      
      })
    })

  return (
    // <div>
    // <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map1-Copy" src="//asy3cnrms2aqun7r.maps.arcgis.com/apps/Embed/index.html?webmap=f17330ec03464c0da6b49ab5e5193bec&extent=57.2788,10.417,109.0903,36.1152&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light"></iframe></div>

    // </div>
    <>
      <div id="main-content">
        <h2>All Records</h2>
        <table cellpadding="7px">
          <thead>
            <th>Id</th>
            <th>Item Name</th>
            <th>Year Of Purchase</th>
            <th>Total No of Item</th>
            <th>Price</th>
            <th>Action</th>
          </thead>

          <tbody>

            <tr>
              <td>{data.itemname}</td>
              <td>{data.year}</td>
              <td>{data.date}</td>
              <td>{data.inusequantity}</td>
              <td>{data.totalquantity}</td>
              <td>
                <Stack direction="row" height={50} padding={0} margin={0} spacing={0}>
                  <Button  onClick={Delete} variant="outlined" startIcon={<DeleteIcon  style={{ fontSize: 30 }} />}>
                    Delete
                  </Button>
                </Stack></td>

            </tr>
            <tr>
              <td>{data.itemname1}</td>
              <td>{data.year1}</td>
              <td>{data.date1}</td>
              <td>{data.inusequantity1}</td>
              <td>{data.totalquantity1}</td>
              <td>
                <Stack direction="row" height={50} padding={0} margin={0} spacing={0}>
                  <Button  onClick={Delete} variant="outlined" startIcon={<DeleteIcon  style={{ fontSize: 30 }} />}>
                    Delete
                  </Button>
                </Stack></td> 

            </tr>

            <tr>
              <td>{data.itemname1}</td>
              <td>{data.year1}</td>
              <td>{data.date1}</td>
              <td>{data.inusequantity1}</td>
              <td>{data.totalquantity1}</td>
              <td>
                <Stack direction="row" height={50} padding={0} margin={0} spacing={0}>
                  <Button  onClick={Delete} variant="outlined" startIcon={<DeleteIcon  style={{ fontSize: 30 }} />}>
                    Delete
                  </Button>
                </Stack></td> 

            </tr>


          </tbody>
        </table>
      </div>
    </>
  )
}
