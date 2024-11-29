import React, { useState } from "react";
import {Box,Button,Container,styled,Typography} from '@mui/material'
import { useNavigate } from "react-router-dom";




const Page = styled(Container)`
min-height: 100vh,
    width: 100%,
    padding-top: 5%,
    background-position: center,
    background-size: cover,
    position: relative,
    outline: auto,

`

const Content = styled(Box)`
width: 1200px,
    height: auto,
    margin: auto,
    color: black,
    position: relative,

`
const Paragraph = styled(Typography)`
padding-left: 20px,
    padding-bottom: 25px,
    font-family: Arial,
    letter-spacing: 1.2px,
    line-height: 30px,

`
const CustomeButtons = styled(Button)`
font-size: 20px,
            cursor: pointer,
            text-decoration: none,
            color: white,

`
const Form = styled(Box)`
font-size: 20px,
            cursor: pointer,
            text-decoration: none,
            color: white,

`

    //         button:hover{
    //         background-color: #f28928; 
    //         }
            
    //         .form p a{
    //             text-decoration: none;
    //             color: rgb(250, 16, 28);
    //         }
    
    
    //         .form
    //         {
    //           width: 400px;
    //           height: 300px;
    //           position: absolute;
    //           top:-1px;
    //           left: 800px;
            
    //         }
   


function Firstpage() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  const GroundAuthority = () => {
    navigate("/groundAuthorityregistion");
  };

  const Club = () => {
    navigate("/club");
  };

  const EventOrganizer = () => {
    navigate("/eventorganizer");
  };

 


  return (
    <>
      <Page>
        <Content>
          <Typography sx={{fontFamily: 'Times New Roman',
    fontSize: 50,
    paddingLeft: 20,
    marginTop: 1,
    letterSpacing: 2,}}>
            Fitness & <br />
            <span> Sports</span>
          </Typography>
          <Paragraph>
            The population of India majorly comprises of youths.
            <br /> Therefore, it is necessary not only to address problems
            <br /> faced by the youths but also provide them opportunities to
            grow.
          </Paragraph>

          <Form>
            <CustomeButtons onClick={GroundAuthority}>
              
              Register as Ground Authority
            </CustomeButtons>
            <br />
            <CustomeButtons onClick={EventOrganizer}>
              
              Register as Event Organiser
            </CustomeButtons>
            <br />
            <CustomeButtons onClick={Club}> Register as Club Organiser </CustomeButtons>
            <br />
            <br />

            
              <CustomeButtons onClick={Login}>Login</CustomeButtons>
         
          </Form>
        </Content>
      </Page>
    </>
  );
}

export default Firstpage;








// .content h1 {
//     font-family: 'Times New Roman';
//     font-size: 50px;
//     padding-left: 20px;
//     margin-top: 1%;
//     letter-spacing: 2px;

// }
// .content h1 span
// {
//     color: green;
// }
// button{
//     width: 100%;
//     padding: 12px;
//     border: 1px solid rgb(19, 10, 10);
//     border-radius: 4px;
//     box-sizing: border-box;
//     margin-top: 6px;
  
//     text-align: center;
//     cursor: pointer;
//     background-color: green;
    
//     }
//     button a{
//         font-size: 20px;
//         cursor: pointer;
//         text-decoration: none;
//         color: white;
    
//         }
//         button:hover{
//         background-color: #f28928; 
//         }
        
//         .form p a{
//             text-decoration: none;
//             color: rgb(250, 16, 28);
//         }


//         .form
//         {
//           width: 400px;
//           height: 300px;
//           position: absolute;
//           top:-1px;
//           left: 800px;
        
//         }
// #link1
// {
//     width:90px;
//     background-color: white;
//     color: rgb(49, 49, 235);
//     border: none;
//     font-size: large;
// }

   