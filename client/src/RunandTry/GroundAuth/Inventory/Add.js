// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';

// import Stack from '@mui/material/Stack';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios'
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function Add() {
//     const [values,setValues] =useState([{
//         itemname:"",
//         year:"",
//         date:"",
//         inusequantity:"",
//         totalquantity:"",
//         condition:"",
//         amount:""
//       }])
//     const addHandler = (e) =>
//     {
//       e.preventDefault();
//       setValues([...values,
//       {
//       itemname:(null),
//       year:(null),
//       date:(null),
//       inusequantity:(null),
//       totalquantity:(null),
//       condition:(null),
//       amount:(null)
//       }])
//     }
//     const changeHandler = (e,i) =>
//               {
//                 const{ name, value} =e.target;
//                 objValues[i][name] =value;
//                 setValues(objValues);
//                 console.log(JSON.stringify({...values}, null, 2));
//               }
//               const submitHandler = async (e)=> 
//               {
//                   e.preventDefault();
//                  await axios.post('http://localhost/SIHProject/insert.php',{
//               }).then((r)=>{console.log(r)})
//             }
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <AddCircleOutlineSharpIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Adding New Data
//           </Typography>
//           <Box component="form" onSubmit={(e) => submitHandler(e,i)} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required   
//               fullWidth
//               value={values}
//               onChange={(e) => changeHandler(e,i)}
//               id="itemname"
//               label="Enter Item Name"
//               name="itemname"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               value={values}
//               onChange={(e) => changeHandler(e,i)}
//               id="year"
//               label="Year of Purchase"
//               name="year"
//               autoFocus
//             />
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="MM/dd/yyyy"
//           value={values}
//           onChange={(e) => changeHandler(e,i)}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         </Stack>
//     </LocalizationProvider>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               value={values}
//               onChange={(e) => changeHandler(e,i)}
//               id="inusequantity"
//               label="Number of Item in use"
//               name="inusequantity"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               value={values}
//               onChange={(e) => changeHandler(e,i)}
//               id="totalquantity"
//               label="Total number of Item"
//               name="totalquantity"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               value={values}
//               onChange={(e) => changeHandler(e,i)}
//               id="condition"
//               label="Condition"
//               name="condition"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               value={values}
//               onChange={(e) => changeHandler(e,i)}
//               id="amount"
//               label="Price"
//               name="amount"
//               autoFocus
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Add
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }