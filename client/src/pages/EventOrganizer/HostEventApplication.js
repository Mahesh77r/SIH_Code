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
  styled,
} from "@mui/material";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { borderBottom } from "@mui/system";
// import { addEventUser } from "../../components/Api";

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
    pin: "",
    address: "",
    email: "",
    phoneno: "",
    date: "",
    from: "",
    to: "",
    purpose: "",
    otherinformation: "",
    upload: "",
  });

  const onchangehandler = (e) => {
    setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (allvalues.password === allvalues.cpassword) {
      // await addEventUser(allvalues);
    } else {
      alert("Enter Password Correctly");
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
              padding: 10,
              boxShadow: 3,
              maxWidth: "800px",
              marginLeft: "163px",
            }}
          >
            <Typography style={{ marginTop: -2 }} component="h1" variant="h5">
              <u> APPLICATION FOR EVENT ORGANISER</u>
            </Typography>

            <Box
              component="form"
              onSubmit={submitHandler}
              noValidate
              sx={{ mt: 3 }}
            >
              <form width="100%">
                <Typography align="left">
                  {" "}
                  Name of Applicant
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    id="nappli"
                    name="nappli"
                    value={allvalues.nappli}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    variant="standard"
                    autoFocus
                  />
                </Typography>{" "}
                <br />
                <Typography align="left">
                  Name of Organization
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="norgan"
                    id="norgan"
                    variant="standard"
                    value={allvalues.norgan}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />
                </Typography>
                <br />
                <Typography align="left">
                  District Pincode
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="pin"
                    id="pin"
                    variant="standard"
                    value={allvalues.pin}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />
                </Typography>{" "}
                <br />
                <Typography align="left">
                  Address
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="address"
                    id="address"
                    variant="standard"
                    value={allvalues.address}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />
                </Typography>{" "}
                <br />
                <Typography align="left">
                  Email
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="email"
                    id="email"
                    variant="standard"
                    value={allvalues.email}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />{" "}
                </Typography>
                <br />
                <Typography align="left">
                  Phone No.
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="phoneno"
                    id="phoneno"
                    variant="standard"
                    value={allvalues.phoneno}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />{" "}
                </Typography>
                <br />
                <Typography align="left">
                  Date
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="date"
                    id="date"
                    variant="standard"
                    value={allvalues.date}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />{" "}
                </Typography>
                <br />
                <Typography align="left">
                  Time
                  <TextField
                    sx={{
                      marginLeft: "33px",
                      width: "6cm",
                      marginTop: "-13px",
                    }}
                    required
                    marginTop="-22px"
                    name="from"
                    label="from"
                    id="from"
                    variant="standard"
                    value={allvalues.from}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />
                  <TextField
                    sx={{ float: "right", width: "6cm", marginTop: "-13px" }}
                    required
                    marginTop="-22px"
                    name="to"
                    label="to"
                    id="to"
                    variant="standard"
                    value={allvalues.to}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />
                </Typography>
                <br />
                <Typography align="left">
                  Purpose of Event
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="purpose"
                    id="purpose"
                    variant="standard"
                    value={allvalues.purpose}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />
                </Typography>
                <br />
                <Typography align="left">
                  Information of Event
                  <TextField
                    sx={{ float: "right", width: "10cm" }}
                    required
                    marginTop="-22px"
                    name="sport"
                    id="sport"
                    variant="standard"
                    value={allvalues.sport}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  />{" "}
                </Typography>
                <br />
                <Typography align="left">
                  {" "}
                  Upload Application
                  <TextField
                    sx={{ float: "right" }}
                    required
                    marginTop="-22px"
                    name="upload"
                    id="upload"
                    variant="standard"
                    value={allvalues.upload}
                    onChange={(e) => onchangehandler(e)}
                    type="file"
                    autoFocus
                  />
                </Typography>
                <br />
                <Button
                  sx={{
                    marginTop: "44px",
                    marginLeft: "6cm",
                    bgcolor: "#00a9cc",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
