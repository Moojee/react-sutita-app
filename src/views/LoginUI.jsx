import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from "@mui/material";
import { FormControl, FormControlLabel, Radio, RadioGroup, Button } from "@mui/material";
import { Stack } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";
import kimdokja from "../assets/kimdokja.png"

function LoginUI() {
  return (
    <>
      <AppBar sx={{ backgroundColor:'#393E46' }}  position="static">
        <Toolbar>
          <Link to={'/'}>
          <CatchingPokemonIcon sx={{ color: "#00ADB5", fontSize: "30px" }} />
          </Link>
          <Typography sx={{ ml: "10px", flexGrow: 1 }}>Kim Dokja</Typography>
          
          <Typography  component={Link} to='/login' sx={{ mr: "10px", textDecoration:'none', color:'white'  }} > Login </Typography>
          <Typography  component={Link} to='/contact' sx={{ mr: "10px", textDecoration:'none', color:'white' }}> Contact </Typography>
          <Typography  component={Link} to='/about' sx={{ mr: "10px", textDecoration:'none', color:'white' }} > About </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: '70%',mx: 'auto', mt: '100px', boxShadow: '2', px: '40px', pb:'40px' }} >
        <Avatar src={kimdokja} sx={{ mx:'auto', mt: '20px', width:'100px', height:'100px' }} />
        <Typography sx={{ textAlign:'center', fontSize:'20px', fontWeight:'bold'}}  >
          Login
        </Typography>

        <Typography sx={{ fontSize:'16px', mt:'20px'}}  >
          UserName
        </Typography>
        <TextField size="small" fullWidth /> 

        <Typography sx={{ fontSize:'16px', mt:'20px'}}  >
          Password
        </Typography>
        <TextField size="small" fullWidth type="password" /> 

        <FormControl>
          <RadioGroup row>  
            <FormControlLabel value='Member' control={< Radio/>} label='Member' /> 
            <FormControlLabel value='Admin' control={< Radio/>} label='Admin' /> 
          </RadioGroup>
        </FormControl>

        <Button variant='contained' fullWidth  sx={{ my:'20px', backgroundColor:'#393E46' }} >
          Login
        </Button>

        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center' }}>

        <Typography sx={{ fontSize:'16px'}}  >
          ยังไม่มีบัญชี
        </Typography>

        <Typography sx={{ fontSize:'16px', ml: 1, color: 'red'}}  >
          ลงทะเบียน
        </Typography>

        </Stack>



      </Box>



    </>
  );
}

export default LoginUI;
