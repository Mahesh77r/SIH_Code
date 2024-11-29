import React, { useState,useN } from "react";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import { Grid,FormControl, Link, Container, Checkbox, CssBaseline, TextField, FormControlLabel, Box, Button, Typography } from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Addmore from './Addmore'
import {addGroundUser} from '../../../components/Api'
import useGeoLocation from "../../../components/useGeolocation";
import { useNavigate } from "react-router-dom";

function Copyright(props) {



    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();
export default function Registration() {
    const [allvalues, setAllvalues] = useState({
        ninfra: "",
        nadmi: "",
        nreg: "",
        otherinformation: "",
        address: "",
        nhouse: "",
        Street: "",
        Landmark: "",
        Locality: "",
        pincode: "",
        state: "",
        district: "",
        subdistrict: "",
        city: "",
        cperson: "",
        designation: "",
        email: "",
        nfax: "",
        phoneno: "",
        aphoneno: "",
        lat:"",
        lng:"",
        age:'',
        ssmen: "",
        sswomen: "",
        sdiscipline:"",
        password: "",
        cpassword: "",
        status:""
    });

    const onchangehandler = (e) => {
        setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate()
const location = useGeoLocation()
    const submithandler = async (e) => {
        e.preventDefault();

        if (allvalues.password === allvalues.cpassword) {

            async function postCrud() {
                try {
                    const response = await axios.post("http://localhost:8080/groundAuthorityregistion/add", allvalues);
                    navigate(-1);
                    alert(`${response.nadmi} successfull`)
                } catch (error) {
                    console.log("error", error);
                }
            }
            postCrud();
        }
    };

    // const classes = useStyles()
    // const [value, setValue] = React.useState('')
    // const handlechange = (event) =>{
    //     setValue(event.target.value)}
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" style={{}}>
                    <CssBaseline />
                    <FormControl >
                    <Box
                        sx={{
                            marginTop: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 10,
                            boxShadow: 3,

                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "#00a9cc", marginTop: -7 }}>
                            <AppRegistrationRoundedIcon />
                        </Avatar>
                        <Typography style={{ marginTop: -4 }} component="h1" variant="h5">
                            GROUND REGISRATION FORM
                        </Typography>

                        <Box
                            component="form"
                            
                            noValidate
                            sx={{ mt: 3 }}

                        >
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="ninfra"
                                        label="Name of the infrastructure"
                                        value={allvalues.ninfra}
                                        onChange={(e) => onchangehandler(e)}
                                        name="ninfra"
                                        type="text"
                                        autoFocus


                                    />
                                </Grid>
                                
                                <Grid item xs={4}>
                                    <InputLabel id="demo-simple-select-label">Ownership Type</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="towner"
                                        value={allvalues.towner}
                                        label="Ownership Type"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Central Government"}>Central Government</MenuItem>
                                        <MenuItem value={"Private / NGO"}>Private / NGO</MenuItem>
                                        <MenuItem value={"Sports Authority of India"}>Sports Authority of India</MenuItem>
                                        <MenuItem value={"State Government"}>State Government</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={4}>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="status"
                                        value={allvalues.status}
                                        label="Status"
                                        name="status"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Status</MenuItem>
                                        <MenuItem value={"Central Government"}>Company</MenuItem>
                                        <MenuItem value={"Firm"}>Firm</MenuItem>
                                        <MenuItem value={"Individual"}>Individual</MenuItem>
                                        <MenuItem value={"Non-profit organisation"}>Non-profit organisation</MenuItem>
                                        <MenuItem value={"Society"}>Society</MenuItem>
                                        <MenuItem value={"Trust"}>Trust</MenuItem>
                                    </Select>
                                </Grid>
                                {/* <FormControl className={classes.formcontrol}> */}
                                <Grid item xs={6} sm={4}>
                                    <InputLabel id="demo-simple-select-label">Year of Establishment</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="ybuilt"
                                        value={allvalues.ybuilt}
                                        label="Year of Establishment"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={1980}>1980</MenuItem>
                                        <MenuItem value={1981}>1981</MenuItem>
                                        <MenuItem value={1982}>1982</MenuItem>
                                        <MenuItem value={1983}>1983</MenuItem>
                                        <MenuItem value={1984}>1984</MenuItem>
                                        <MenuItem value={1985}>1985</MenuItem>
                                        <MenuItem value={1986}>1986</MenuItem>
                                        <MenuItem value={1987}>1987</MenuItem>
                                        <MenuItem value={1988}>1988</MenuItem>
                                        <MenuItem value={1989}>1989</MenuItem>
                                        <MenuItem value={1990}>1990</MenuItem>
                                        <MenuItem value={1991}>1991</MenuItem>
                                        <MenuItem value={1992}>1992</MenuItem>
                                        <MenuItem value={1993}>1993</MenuItem>
                                        <MenuItem value={1994}>1994</MenuItem>
                                        <MenuItem value={1995}>1995</MenuItem>
                                        <MenuItem value={1996}>1996</MenuItem>
                                        <MenuItem value={1997}>1997</MenuItem>
                                        <MenuItem value={1998}>1998</MenuItem>
                                        <MenuItem value={1999}>1999</MenuItem>
                                        <MenuItem value={2000}>2000</MenuItem>
                                        <MenuItem value={2001}>2001</MenuItem>
                                        <MenuItem value={2002}>2002</MenuItem>
                                        <MenuItem value={2003}>2003</MenuItem>
                                        <MenuItem value={2004}>2004</MenuItem>
                                        <MenuItem value={2005}>2005</MenuItem>
                                        <MenuItem value={2006}>2006</MenuItem>
                                        <MenuItem value={2007}>2007</MenuItem>
                                        <MenuItem value={2008}>2008</MenuItem>
                                        <MenuItem value={2009}>2009</MenuItem>
                                        <MenuItem value={2010}>2010</MenuItem>
                                        <MenuItem value={2011}>2011</MenuItem>
                                        <MenuItem value={2012}>2012</MenuItem>
                                        <MenuItem value={2013}>2013</MenuItem>
                                        <MenuItem value={2014}>2014</MenuItem>
                                        <MenuItem value={2015}>2015</MenuItem>
                                        <MenuItem value={2016}>2016</MenuItem>
                                        <MenuItem value={2017}>2017</MenuItem>
                                        <MenuItem value={2018}>2018</MenuItem>
                                        <MenuItem value={2019}>2019</MenuItem>
                                        <MenuItem value={2020}>2020</MenuItem>
                                        <MenuItem value={2021}>2021</MenuItem>
                                        <MenuItem value={2022}>2022</MenuItem>


                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="nadmi"
                                        label="Name of the Administrator"
                                        value={allvalues.nadmi}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nadmi"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                {/* </FormControl> */}
                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label">Infrastructure type</InputLabel>
                                    <Select
                                       
                                        required
                                        fullWidth

                                        labelId="demo-simple-select-label"
                                        id="tinfra"
                                        value={allvalues.ninfra}
                                        label="Infrastructure type"
                                        name="ninfra"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Single-Facility"}>Single-Facility</MenuItem>
                                        <MenuItem value={"Multi-Facility"}>Multi-Facility</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="nreg"
                                        label="Registration number"
                                        value={allvalues.nreg}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nreg"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="otherinformation"
                                        label="Other Information"
                                        value={allvalues.otherinformation}
                                        onChange={(e) => onchangehandler(e)}
                                        name="otherinformation"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>

                                <Typography style={{ marginLeft: "20px", marginTop: "19px" }} component="h1" variant="h5">
                                    Address
                                </Typography>

                                <Grid item xs={6} sm={12}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        value={allvalues.address}
                                        onChange={(e) => onchangehandler(e)}
                                        name="address"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="address2"
                                        value={allvalues.address2}
                                        label=""
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select</MenuItem>
                                        <MenuItem value={"C/o"}>C/o</MenuItem>
                                        <MenuItem value={"D/o"}>D/o</MenuItem>
                                        <MenuItem value={"N/o"}>N/o</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={4} >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="nhouse"
                                        label="House/Plot/Building Number"
                                        value={allvalues.nhouse}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nhouse"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="Street"
                                        label="Street"
                                        value={allvalues.Street}
                                        onChange={(e) => onchangehandler(e)}
                                        name="Street"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}   >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="Landmark"
                                        label="Landmark"
                                        value={allvalues.Landmark}
                                        onChange={(e) => onchangehandler(e)}
                                        name="Landmark"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>


                                <Grid item xs={4}  >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="Locality"
                                        label="Locality"
                                        value={allvalues.Locality}
                                        onChange={(e) => onchangehandler(e)}
                                        name="Locality"

                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}  >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="pincode"
                                        label="Pincode"
                                        value={allvalues.pincode}
                                        onChange={(e) => onchangehandler(e)}
                                        name="pincode"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}  >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="state"
                                        label="State"
                                        value={allvalues.state}
                                        onChange={(e) => onchangehandler(e)}
                                        name="state"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4} >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="district"
                                        label="District"
                                        value={allvalues.district}
                                        onChange={(e) => onchangehandler(e)}
                                        name="district"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4} >
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="subdistrict"
                                        label="Sub-District"
                                        value={allvalues.subdistrict}
                                        onChange={(e) => onchangehandler(e)}
                                        name="subdistrict"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="city"
                                        label="city"
                                        value={allvalues.city}
                                        onChange={(e) => onchangehandler(e)}
                                        name="city"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="lat"
                                        label="Latitude"
                                        value={location.coordinates.lat}
                                        onChange={(e) => onchangehandler(e)}
                                        name="lat"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid><Grid item xs={4}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="lng"
                                        label="Longitude"
                                        value={location.coordinates.lng}
                                        onChange={(e) => onchangehandler(e)}
                                        name="lng"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>


                                <Grid item xs={12} sm={6}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        value={allvalues.cperson}
                                        onChange={(e) => onchangehandler(e)}
                                        name="cperson"
                                        label="Contact Person"
                                        type="text"
                                        id="cperson"

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="designation"
                                        label="Designation"
                                        value={allvalues.designation}
                                        onChange={(e) => onchangehandler(e)}
                                        name="designation"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        value={allvalues.email}
                                        onChange={(e) => onchangehandler(e)}
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="nfax"
                                        label="Fax. Number"
                                        value={allvalues.nfax}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nfax"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="phoneno"
                                        label="Phone Number"
                                        value={allvalues.phoneno}
                                        onChange={(e) => onchangehandler(e)}
                                        name="phoneno"
                                        type="tel"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        id="aphoneno"
                                        label="Alternate Phone Number"
                                        value={allvalues.aphoneno}
                                        onChange={(e) => onchangehandler(e)}
                                        name="aphoneno"
                                        type="tel"
                                        autoFocus
                                    />
                                </Grid>
                               <Addmore />
                                
                                <Typography style={{ marginLeft: "20px", marginTop: "19px" }} component="h1" variant="h5">
                                    Password
                                </Typography>
                                <Grid item xs={12}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        value={allvalues.password}
                                        onChange={(e) => onchangehandler(e)}
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                       
                                        required
                                        fullWidth
                                        value={allvalues.cpassword}
                                        onChange={(e) => onchangehandler(e)}
                                        name="cpassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="cpassword"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                </Grid>

                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"I agree to Terms and Conditions"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            onClick={submithandler}
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                        </FormControl>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
}