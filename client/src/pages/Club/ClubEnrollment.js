import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Grid,Link,Container,Checkbox,CssBaseline,TextField, FormControlLabel,Box, Button, Typography, styled } from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

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
    from:"",
    address:"",
    date:"",
    ground:"",
    spoc:"",
    subject:"",
    above:"",
    secretary:"",
    act:"",
    copy:"",
    name:"",
    list:"",
    sport:"",
    add:"",
    village:"",
    taluka:"",
    dist:"",
    const:"",
    mob:"",
    mail:"",
    nocp:"",
    noc:"",
    state:"",
    report:"",
    detail:"",
  });

  const onchangehandler = (e) => {
    setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if(allvalues.password===allvalues.cpassword )
    {

        // await addEventUser(allvalues);
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
            <Typography style={{marginTop: 5}} component="h1" variant="h5">
           <u> APPLICATION FOR CLUB ENROLLMENT</u>

            </Typography>
            
            
            <Box
              component="form"
              onSubmit={submitHandler}
              noValidate
              sx={{ mt: 3 }}
              
        >
                <form width='100%'>
              
              <Typography align='left'> From: 
                 <TextField  
                  required
                    marginTop='-22px'
                    id="from"  
                    name="from"
                    value={allvalues.from}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    variant="standard"
                    autoFocus
                  /> 
                 </Typography> <br />
                 
                  <Typography align='left'> Address :
                  <TextField  
                   required
                   marginTop='-22px'
                    name="address"
                    id="address"  variant="standard"
                    value={allvalues.address}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  /> 
                  </Typography><br />
                   <Typography align='left'> Dated :
                   <TextField  
                   required
                   marginTop='-22px'
                   name="date"
                    id="date"  variant="standard"
                    value={allvalues.date}
                    onChange={(e) => onchangehandler(e)}
                    type="text"
                    autoFocus
                  /> 
                  </Typography><br />
                   <Typography align='left'> To, <br/>
           The Executive Director,<br/></Typography><br />
                   <Typography align='left'>The Ground Authority of
                   <TextField  
                   required
                   marginTop='-22px'
                   name="ground"
                    id="ground"  variant="standard"
                    value={allvalues.ground}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                  /></Typography>
                   <Typography align='left'>(Address of Ground Authority) </Typography> <br />
                   <Typography align='left'>Name of SPOC of Ground/Stadium, 
                   <TextField  
                     required
                     marginTop='-22px'
                    id="spoc"  variant="standard"
                    value={allvalues.from}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                  />
                   <br /> (Address of SPOC)</Typography> <br />
 
                   <Typography align='left'>Sub: Regarding Registration of (Name of the club)
                   <TextField 
                     required
                     marginTop='-22px'
                     name="subject"
                    id="subject"  variant="standard"
                    value={allvalues.subject}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                    /> Sports Club. </Typography><br/>
                   <Typography align='left'>Sir,</Typography>
                  
                   <Typography align='left'>With reference to the Subject above, I the undersigned Mr./Mrs.
                   <TextField  
                     required
                     marginTop='-22px'
                     name="above"
                    id="above"  variant="standard"
                    value={allvalues.above}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                    /> President/Secretary of the 
                    <TextField  
                     required
                     marginTop='-22px'
                     name="secretary"
                    id="secretary"  variant="standard"
                    value={allvalues.secretary}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                    />Club enclose herewith the below mentioned documents and details required by your office in order to register our club on your office in the order to register our club on your ground/stadium. </Typography><br/>
                    <Typography align='left'>1.Copy of the Certificate unser the Societies Registration Act, 1860 issude by office of the District Registrator of Societies.
                    <TextField  sx={{ float:'right' }}
                     required
                     marginTop='-22px'
                     name="act"
                    id="act"  variant="standard"
                    value={allvalues.act}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/>
                     
                     <Typography align='left'>2.Certified copy of the Memorendum/Constitution of the Sports Club by the office of the District Registor.
                    <TextField sx={{ float:'right' }} 
                     required
                     marginTop='-22px'
                     name="copy"
                    id="copy"  variant="standard"
                    value={allvalues.copy}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/>
                     <Typography align='left'>3.The name of the President, Secretary and Tresurer along with their passport size photograph,residential address (the copy of the address proof), phone no., Email ID. 
                    <TextField sx={{ float:'right' }} 
                     required
                     marginTop='-22px'
                     name="name"
                    id="name"  variant="standard"
                    value={allvalues.name}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/>
                    <Typography align='left'>4.The list of the members of the General Body Committee with mimimum 25 member with their Residential Address,Phone No. Email ID etc.
                    <TextField  sx={{ float:'right' }}
                     required
                     marginTop='-22px'
                     name="list"
                    id="list"  variant="standard"
                    value={allvalues.list}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/>
                    
                    <Typography align='left'>5.The name of the Sports Club 
                    <TextField  
                     required
                     marginTop='-22px'
                     name="sport"
                    id="sport"  variant="standard"
                    value={allvalues.sport}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                    /><br/>Address of the Sports Club
                    <TextField  
                     required
                     marginTop='-22px'
                     name="add"
                    id="add"  variant="standard"
                    value={allvalues.add}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                    /><br/>Village
                    <TextField  
                     required
                     marginTop='-22px'
                     name="village"
                    id="village"  variant="standard"
                    value={allvalues.village}
                    onChange={(e) => onchangehandler(e)}                  
                    type="text"
                    autoFocus
                    /><br/>Taluka<TextField  
                    required
                    marginTop='-22px'
                    name="taluka"
                   id="taluka"  variant="standard"
                   value={allvalues.taluka}
                   onChange={(e) => onchangehandler(e)}                  
                   type="text"
                   autoFocus
                   /><br /> District<TextField  
                   required
                   marginTop='-22px'
                   name="dist"
                  id="dist"  variant="standard"
                  value={allvalues.dist}
                  onChange={(e) => onchangehandler(e)}                  
                  type="text"
                  autoFocus
                  /><br />Constituency<TextField  
                  required
                  marginTop='-22px'
                  name="const"
                 id="const"  variant="standard"
                 value={allvalues.const}
                 onChange={(e) => onchangehandler(e)}                  
                 type="text"
                 autoFocus
                 /><br />Phone no.<TextField  
                 required
                 marginTop='-22px'
                 name="mob"
                id="mob"  variant="standard"
                value={allvalues.mob}
                onChange={(e) => onchangehandler(e)}                  
                type="text"
                autoFocus
                /><br />E-mail ID <TextField  
                required
                marginTop='-22px'
                name="mail"
               id="mail"  variant="standard"
               value={allvalues.mail}
               onChange={(e) => onchangehandler(e)}                  
               type="text"
               autoFocus
               /> </Typography><br/>
                <Typography align='left'>6.NOC of Panchayat/Municipality (original copy signed by the Secratary)starting that they have no objection to register the Club at Ground/Stadium.
                    <TextField sx={{ float:'right' }} 
                     required
                     marginTop='-22px'
                     name="nocp"
                    id="nocp"  variant="standard"
                    value={allvalues.nocp}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/>
                    <Typography align='left'>7.NOC from the nearest Sports Club which is registered/recognized by Ground/Stadium.
                    <TextField sx={{ float:'right' }} 
                     required
                     marginTop='-22px'
                     name="noc"
                    id="noc"  variant="standard"
                    value={allvalues.noc}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/>
                    <Typography align='left'>8.Whether the Club is affiliated to any State Sports Association.
                    <TextField sx={{ float:'right' }} 
                     required
                     marginTop='-22px'
                     name="state"
                    id="state"  variant="standard"
                    value={allvalues.state}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/><Typography align='left'>9.Report of the activities conducted by the club during the last 3 yrs along with the Photographs, newspaper clipping, etc if conducted.
                    <TextField  sx={{ float:'right' }}
                     required
                     marginTop='-22px'
                     name="report"
                    id="report"  variant="standard"
                    value={allvalues.report}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/><Typography align='left'>10.Details of the Sports/Game that the Sports Club promotes for the youth of the Club, inclusive of the list of outstanding sportspersons of the Sports Club.
                    <TextField sx={{ float:'right' }} 
                     required
                     marginTop='-22px'
                     name="details"
                    id="details"  variant="standard"
                    value={allvalues.detail}
                    onChange={(e) => onchangehandler(e)}                  
                    type="file"
                    autoFocus
                    /></Typography><br/>
                     <Typography align='left'> This is for your information and necessary action. <br />
                      Yours faithfully,<br/>
                     (President/Secretary)<br/>
                     of the Sports Club           
                     </Typography>
                     <Button 
                     sx={{  margin: '14px', marginLeft:'12cm', bgcolor: "#00a9cc" }}variant="contained">Submit</Button>

                 </form>
                 
                 </Box> 
            </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
      </>
    );
}