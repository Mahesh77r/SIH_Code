import  React,{useState} from "react";
import Avatar from "@mui/material/Avatar";

import FormControlLabel from "@mui/material/FormControlLabel";
import {Link,Box,Typography,Container,Grid,Checkbox,TextField,CssBaseline,Button,Dialog} from "@mui/material";


import { createTheme, ThemeProvider } from "@mui/material/styles";


import {clubLogin ,groundLogin,eventLogin} from '../Api'
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

export default function SignUp({login,changeHandler,data}) {


  
        
  return (
   
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Enter Email"
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={(e) => changeHandler(e)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="password"
                  value={data.password}
                  onChange={(e) => changeHandler(e)}
                  label="Enter Password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={login}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
   
  );
}
