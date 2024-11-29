import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, CssBaseline, Box, Container, Typography } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Sign() {
  const navigate = useNavigate();
  const GroundAuthority = () => {
    navigate("/login/groundAuthoritylogin");
  };

  const Club = () => {
    navigate("/login/clublogin");
  };

  const EventOrganizer = () => {
    navigate("/login/eventorganizerlogin");
  };

  return (
    <>
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
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={GroundAuthority}
                sx={{ mt: 3, mb: 2 }}
              >
                Login as Ground Authority
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={EventOrganizer}
                sx={{ mt: 3, mb: 2 }}
              >
                Login as Event Organiser
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={Club}
                sx={{ mt: 3, mb: 2 }}
              >
                Login as Club Organiser
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
export default Sign;
