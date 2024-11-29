import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Grid, Link, Container, CssBaseline, TextField,  Box, Button, Typography} from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
// import './Ground123.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { addEventUser } from "../../components/Api";
// import { makeStyles } from "@mui/material/styles";


// const useStyles = makeStyles((theme) => ({ 
//     formControl: {
//     margin: theme.spacing(1),
//      minwidth: 200
// }
// }))





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
        nlans: "",
        npitch: "",
        ncoaches: "",
        saccomo: "",
        mrestrict: "",
        ncourt: "",
        nball: "",
        nnet: "",
        tcourt: "",


    });

    const onchangehandler = (e) => {
        setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (allvalues.password === allvalues.cpassword) {

            // await addEventUser(allvalues);
        }
        else {
            alert("Enter Password Correctly")
        }
        // window.location.href('/eventdashboard')
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
                            FACILITY TYPE
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={submitHandler}
                            noValidate
                            sx={{ mt: 3 }}

                        >
                            <Grid container spacing={2} >


                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label">Select the available facilities</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="tfacility"
                                        value={allvalues.tfacility}
                                        label="Select the available facilities"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
                                        <MenuItem value={"Cricket"}>Cricket</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="nlans"
                                        label="Number of lanes"
                                        value={allvalues.nlans}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nlans"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="npitch"
                                        label="Number of Pitch"
                                        value={allvalues.npitch}
                                        onChange={(e) => onchangehandler(e)}
                                        name="npitch"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="ncoaches"
                                        label="Number of the coaches"
                                        value={allvalues.ncoaches}
                                        onChange={(e) => onchangehandler(e)}
                                        name="ncoaches"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="saccomo"
                                        label="Accomodation for Sportpersons"
                                        value={allvalues.saccomo}
                                        onChange={(e) => onchangehandler(e)}
                                        name="saccomo"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Food lit</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="flit"
                                        value={allvalues.flit}
                                        label="Food lit"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Disability friendly</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="dfriendly"
                                        value={allvalues.dfriendly}
                                        label="Disability friendly"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Sports for Women</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="swomen"
                                        value={allvalues.swomen}
                                        label="Sports for Women"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                {/* <FormControl className={classes.formcontrol}> */}
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Year built</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="ybuilt"
                                        value={allvalues.ybuilt}
                                        label="Year built"
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

                                {/* </FormControl> */}
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Access type</InputLabel>
                                    <Select
                                        margin="normal"
                                        required
                                        fullWidth

                                        labelId="demo-simple-select-label"
                                        id="access"
                                        value={allvalues.access}
                                        label="Access type"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Selection"}>Selection</MenuItem>
                                        <MenuItem value={"Members"}>Members</MenuItem>
                                        <MenuItem value={"Guest"}>Guest</MenuItem>
                                        <MenuItem value={"Pay & Play"}>Pay & Play</MenuItem>
                                        <MenuItem value={"Others"}>Others</MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Membership</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="Membership"
                                        value={allvalues.Membership}
                                        label="Membership"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="mrestrict"
                                        label="Membership Restriction(if any)"
                                        value={allvalues.mrestrict}
                                        onChange={(e) => onchangehandler(e)}
                                        name="mrestrict"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Changing room</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="croom"
                                        value={allvalues.croom}
                                        label="Changing room"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Opening time</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="otime"
                                        value={allvalues.otime}
                                        label="Opening time"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Mon-fri</MenuItem>
                                        <MenuItem value={"No"}>Weekend</MenuItem>

                                    </Select>
                                </Grid>


                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Club</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="Club"
                                        value={allvalues.Club}
                                        label="Club"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Medical facility</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="mfaci"
                                        value={allvalues.mfaci}
                                        label="Medical facility"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="ncourt"
                                        label="Number of court"
                                        value={allvalues.ncourt}
                                        onChange={(e) => onchangehandler(e)}
                                        name="ncourt"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="nball"
                                        label="Number of ball"
                                        value={allvalues.nball}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nball"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="nnet"
                                        label="Number of net"
                                        value={allvalues.nnet}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nnet"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="tcourt"
                                        label="Type of court"
                                        value={allvalues.tcourt}
                                        onChange={(e) => onchangehandler(e)}
                                        name="tcourt"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>



                                <Grid container>
                                    <Grid item xs>
                                        <Button
                                            type="button"

                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Clear Form
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type="button"

                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Save and Continue
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
}