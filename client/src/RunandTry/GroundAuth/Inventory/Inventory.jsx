            import {TableContainer,Table,TableBody,TableRow,TableHead,TableCell,Paper} from '@mui/material'
            import React,{ useState } from 'react'
            import axios from 'axios'
            import './Inventory.css'


            function Inventory(props) 
            {
              const [values,setValues] = useState([{
                itemname:"",
                year:"",
                date:"",
                inusequantity:"",
                totalquantity:"",
                condition:"",
                amount:""
              }])

              const objValues =[...values];

          //     function changeHandler(evt)
          //     {
          //     const value = evt.target.value;
          //     setValues({
          //    ...values,
          //     [evt.target.name]: value,
          //   });
          // }
              const changeHandler = (e,i) =>
              {
                const{ name, value} =e.target;
                objValues[i][name] =value;
                setValues(objValues);
                console.log(JSON.stringify({...values}, null, 2));
              }

              const addHandler = (e) =>
              {
                e.preventDefault();
                setValues([...values,
                {
                itemname:(null),
                year:(null),
                date:(null),
                inusequantity:(null),
                totalquantity:(null),
                condition:(null),
                amount:(null)
                }])
               
                
              }

              const deleteHandler =(i) => 
              {
                const data =[...values]
                data.slice(i,1)
                setValues(data)
              }


              const submitHandler = (e) =>
              {
                  e.preventDefault();
                 
                 
                
              }

              return (
                <>
                <form onSubmit={addHandler}>
                <h1><center>Inventory Mangement Module</center></h1>
                  <TableContainer  component={Paper} >
                  <Table >
                    <TableHead>
                    <TableRow>
                    <TableCell>Enter Item Name</TableCell>
                    <TableCell>Year of Purchase</TableCell>
                    <TableCell>Issue Date</TableCell>
                    <TableCell>Number of Item in use</TableCell>
                    <TableCell>Total number of Item</TableCell>
                    <TableCell>Condition</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell><button onClick={addHandler}>ADD</button></TableCell>
                    </TableRow>

                    </TableHead>
              
                {values.map((values,i) => (

                    <TableBody key={i}>
                    <TableRow >
                    <TableCell><input  value={values.itemname} name="itemname" onChange={(e) => changeHandler(e,i)} type="text" id="itemname" placeholder="Enter a item"/></TableCell>
                    <TableCell><input  value={values.year} name="year" onChange={(e) => changeHandler(e,i)}type="number" id="year" placeholder="Enter Year"/></TableCell>
                    <TableCell><input  value={values.date} name="date" onChange={(e) => changeHandler(e,i)} type="date" id="date" placeholder="Enter a Date"/></TableCell>
                    <TableCell><input  value={values.inusequantity} name="inusequatity" onChange={(e) => changeHandler(e,i)} type="number" id="inusequatity" placeholder="Enter a quatity"/></TableCell>
                    <TableCell><input  value={values.totalquantity} name="totalquantity" onChange={(e) => changeHandler(e,i)} type="number" id="totalquantity" placeholder="Enter a quatity"/></TableCell>
                    <TableCell><input  value={values.condition} name="condition"  onChange={(e) => changeHandler(e,i)} type="text" id="condition" placeholder="Enter Condition"/></TableCell>
                    <TableCell><input  value={values.amount} name="amount" onChange={(e) => changeHandler(e,i)} type="number" id="amount" placeholder="Enter a Price"/></TableCell>
                    <TableCell><button onClick={ () => deleteHandler(i)}>Delete</button></TableCell>
                    </TableRow>
                    </TableBody>
                  ))}

                </Table>
                </TableContainer>
                </form>
                </>
              )
}

export default Inventory