import React,{useState} from "react";
import axios from "axios";
import useNagivate from 'react-router-dom'
function AddInventory() {
  const [data, setData] = useState({
    name: "",
    year: "",
   price:"",
    quantity: "",
    
  });

  const onTextChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

const navigate = useNagivate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    async function postCrud() {
			try {
				const response = await axios.post("http://localhost:8080/groundAuthorityregistion/datatable/add", data);
				navigate(-1);
        if(response.status===200)
        alert("successfull")
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
  };

  const handleReset = () => setTextValue("");

  return (
    <>
      <Paper>
        <h2>Add An Item</h2>

        <TextField
          onChange={(e) => onTextChange(e)}
          value={data.name}
          label={"Name"}
          name="name"
        />
        <TextField
          onChange={(e) => onTextChange(e)}
          value={data.year}
          label={"Year"}
          name="year"
        />
        <TextField
          onChange={(e) => onTextChange(e)}
          value={data.quantity}
          label={"Quantity"}
          name="quantity"
        />
        <TextField
          onChange={(e) => onTextChange(e)}
          value={data.price}
          label={"Price"}
          name="price"
        />
        
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Paper>
    </>
  );
}

export default AddInventory;
