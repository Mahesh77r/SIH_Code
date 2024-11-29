import React, { useState } from "react";

import { Grid, Link, Container, CssBaseline, Input, Box, Button, Typography, } from '@mui/material';

// import './Ground123.css';

import { createTheme, ThemeProvider } from "@mui/material/styles";






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



    });

    const onchangehandler = (e) => {
        setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
    };


    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" style={{}}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 6,
                            padding: 4,
                            boxShadow: 3,

                        }}
                    >

                        <Typography style={{ marginLeft: 390, marginBottom: 50,  marginTop:20 }} component="h1" variant="h5" >
                            UPLOAD DOCUMENTS
                        </Typography>


                        <Grid container spacing={2} >
                            <Box
                                sx={{

                                    margin: 2,
                                    boxShadow: 1,
                                    width: 1200,
                                    padding: 1,

                                }}
                            >
                                <Grid item xs={6} >
                                    <Typography style={{marginTop:25, fontSize: 25}}>
                                    Aadhar Card
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{marginLeft:800,marginTop:-25}} >
                                    <Input
                                        type="file"
                                    >

                                    </Input>
                                </Grid>
                            </Box>
                            <Box
                                sx={{

                                    margin: 2,
                                    boxShadow: 1,
                                    width: 1200,
                                    padding: 1,

                                }}
                            >
                                <Grid item xs={6} >
                                    <Typography style={{marginTop:25, fontSize: 25}}>
                                    Application
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{marginLeft:800,marginTop:-25}} >
                                    <Input
                                        type="file"
                                    >

                                    </Input>
                                </Grid>
                            </Box>
                        
                            <Box
                                sx={{

                                    margin: 2,
                                    boxShadow: 1,
                                    width: 1200,
                                    padding: 1,

                                }}
                            >
                                <Grid item xs={6} >
                                    <Typography style={{marginTop:25, fontSize: 25}}>
                                    Certificate
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{marginLeft:800,marginTop:-25}} >
                                    <Input
                                        type="file"
                                    >

                                    </Input>
                                </Grid>
                            </Box>
                        
                            <Box
                                sx={{

                                    margin: 2,
                                    boxShadow: 1,
                                    width: 1200,
                                    padding: 1,

                                }}
                            >
                                <Grid item xs={6} >
                                    <Typography style={{marginTop:25, fontSize: 25}}>
                                    Land Ownership(Owned/Leased)
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{marginLeft:800,marginTop:-25}} >
                                    <Input
                                        type="file"
                                    >

                                    </Input>
                                </Grid>
                            </Box>
                            <Box
                                sx={{

                                    margin: 2,
                                    boxShadow: 1,
                                    width: 1200,
                                    padding: 1,

                                }}
                            >
                                <Grid item xs={6} >
                                    <Typography style={{marginTop:25, fontSize: 25}}>
                                    Ground Image
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{marginLeft:800,marginTop:-25}} >
                                    <Input
                                        type="file"
                                    >

                                    </Input>
                                </Grid>
                            </Box>

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
                                      Submit
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
}