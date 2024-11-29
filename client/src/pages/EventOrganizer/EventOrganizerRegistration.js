import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Grid,Link,Container,Checkbox,CssBaseline,TextField, FormControlLabel,Box, Button, Typography, styled } from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { addEventUser } from "../../components/Api";



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
    nappli: "",
    norgan: "",
    state: "",
    district: "",
    pincode: "",
    address: "",
    email: "",
    password: "",
    cpassword: "",
    phoneno: "",
    
    otherinformation: "",
  });

  const onchangehandler = (e) => {
    setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if(allvalues.password===allvalues.cpassword )
    {

        await addEventUser(allvalues);
    }
    else
    {
        alert("Enter Password Correctly")
    }
    // window.location.href('/eventdashboard')
  };
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
              padding:10,
              boxShadow: 3,
             
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#00a9cc",marginTop: -7 }}>
              <AppRegistrationRoundedIcon />
            </Avatar>
            <Typography style={{marginTop: -4}} component="h1" variant="h5">
              REGISTRATION FORM
            </Typography>
            <Box
              component="form"
              onSubmit={submitHandler}
              noValidate
              sx={{ mt: 3 }}
              
            >
              <Grid container spacing={2} >
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nappli"
                    label="Name of Applicant"
                    value={allvalues.nappli}
                    onChange={(e) => onchangehandler(e)}
                    name="nappli"
                    type="text"
                    autoFocus
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="norgan"
                    label="Name of Organization"
                    value={allvalues.norgan}
                    onChange={(e) => onchangehandler(e)}
                    name="norgan"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
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
                    margin="normal"
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
                    margin="normal"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
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
                    margin="normal"
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

                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="achievement"
                    label="Achievement"
                    value={allvalues.achievement}
                    onChange={(e) => onchangehandler(e)}
                    name="achievement"
                    autoComplete="email"
                    autoFocus
                  /> 
                </Grid>*/}
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
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
