

import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import {
  Grid,
  Link,
  Container,
  Checkbox,
  CssBaseline,
  TextField,
  FormControlLabel,
  Box,
  Button,
  Typography,
  FormControl,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


function App() {
  const [inputList, setInputList] = useState([
    { sdiscipline: "", tevent: "", ssmen: "", sswomen: "" },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { sdiscipline: "", tevent: "", ssmen: "", sswomen: "" },
    ]);
  };

  return (
    <Container>
      <FormControl fullWidth>
        {inputList.map((x, i) => {
          return (
            <Box>
              <Grid container spacing={2} >
              <Grid item xs={6} sm={12}>
                  
                <InputLabel id="demo-simple-select-label">Sports Discipline</InputLabel>
                <Select
               fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={x.sdiscipline}
                  label="Discipline"
                  name="sdiscipline"
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <MenuItem value={"Archery"}>Archery</MenuItem>
                  <MenuItem value={"Athletics"}>Athletics</MenuItem>
                  <MenuItem value={"Badminton"}>Badminton</MenuItem>
                  <MenuItem value={"Basketball"}>Basketball</MenuItem>
                  <MenuItem value="13">Boxing</MenuItem>
              <MenuItem value="35">Canoeing &amp; Kayaking</MenuItem>
              <MenuItem value="52">Chess</MenuItem>
              <MenuItem value="19">Cycling</MenuItem>
              <MenuItem value="39">Diving</MenuItem>
              <MenuItem value="41">Equestrian</MenuItem>
              <MenuItem value="21">Fencing</MenuItem>
              <MenuItem value={"Football"}>Football</MenuItem>
              <MenuItem value="23">Gatka</MenuItem>
              <MenuItem value="58">Golf</MenuItem>
              <MenuItem value="11">Gymnastics</MenuItem>
              <MenuItem value="34">Handball</MenuItem>
              <MenuItem value="10">Hockey</MenuItem>
              <MenuItem value="45">Ice Hockey</MenuItem>
              <MenuItem value="9">Judo</MenuItem>
              <MenuItem value="8">Kabaddi</MenuItem>
              <MenuItem value="24">Kalaripayattu</MenuItem>
              <MenuItem value="37">Karate</MenuItem>
              <MenuItem value="7">Kho-Kho</MenuItem>
              <MenuItem value="42">Khomlainai</MenuItem>
              <MenuItem value="50">Korfball</MenuItem>
              <MenuItem value="30">Lawn Bowl</MenuItem>
              <MenuItem value="22">Mallakhamb</MenuItem>
              <MenuItem value="44">Mukna</MenuItem>
              <MenuItem value="27">Para - Athletics</MenuItem>
              <MenuItem value="26">Para - Badminton</MenuItem>
              <MenuItem value="29">Para - Powerlifting</MenuItem>
              <MenuItem value="28">Para - Swimming</MenuItem>
              <MenuItem value="46">Pencak Silat</MenuItem>
              <MenuItem value="48">Powerlifting</MenuItem>
              <MenuItem value="49">RollBall</MenuItem>
              <MenuItem value="20">Rowing</MenuItem>
              <MenuItem value="36">Rugby</MenuItem>
              <MenuItem value="40">Sailing</MenuItem>
              <MenuItem value="31">Sepaktakraw</MenuItem>
              <MenuItem value="6">Shooting</MenuItem>
              <MenuItem value="43">Silambam</MenuItem>
              <MenuItem value="38">Softball</MenuItem>
              <MenuItem value="47">Sqay</MenuItem>
              <MenuItem value="5">Swimming</MenuItem>
              <MenuItem value="18">Table Tennis</MenuItem>
              <MenuItem value="33">Taekwondo</MenuItem>
              <MenuItem value="53">Tamo Martial Art</MenuItem>
              <MenuItem value="17">Tennis</MenuItem>
              <MenuItem value="25">Thang-Ta</MenuItem>
              <MenuItem value="4">Volleyball</MenuItem>
              <MenuItem value="66">Water Polo</MenuItem>
              <MenuItem value="3">Weightlifting</MenuItem>
              <MenuItem value="2">Wrestling</MenuItem>
              <MenuItem value={"32"}>Wushu</MenuItem>
              <MenuItem value={"51"}>Yogasana</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="tevent"
                name="tevent"
                label="Event Type "
                value={x.tevent}
                
                type="text"
                autoFocus
                onChange={(e) => handleInputChange(e, i)}
                />
              </Grid>
                                    
              <Grid item xs={12} sm={4}>
                <TextField
                margin="normal"
                required
                fullWidth
                  name="smen"
                  id="smen"
                  label="Sanctioned Strength (Men) "
                  value={x.ssmen}
                  type="number"
                autoFocus
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                margin="normal"
                required
                fullWidth
                name="sswomen"
                  id="sswomen"
                  label="Sanctioned Strength (Women)"
                  value={x.sswomen}
                  type="number"
                  autoFocus
                  onChange={(e) => handleInputChange(e, i)}
                />
              </Grid>
              </Grid>
              <div className="btn-box">
                {inputList.length !== 1 && (
                    <Button type="button"
                    fullWidth
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    sx={{ mt: 2, mb: 1 }} onClick={() => handleRemoveClick(i)}>
                      Remove
                    </Button>
                 
                  
                )}
                {inputList.length - 1 === i && (
                    <Button
                              type="button"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 2, mb: 0.5 }}
                              onClick={handleAddClick}
                            >
                              Add More +
                            </Button>
                 
                )}
              </div>
           
            </Box>
          );
        })}
        
      </FormControl>
    </Container>
  );
}

export default App;


