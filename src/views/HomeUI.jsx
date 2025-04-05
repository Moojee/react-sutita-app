import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import kimdokja from "./../assets/kimdokja.png";
import { Link } from "react-router-dom";

function HomeUI() {
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ width: "80%", boxShadow: "1", mx: "auto", my: "auto" }}>
          <Avatar
            src={kimdokja}
            sx={{ mx: "auto", mt: "10px", width: "150px", height: "150px" }}
          />

          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#222831", textAlign: "center" }}
          >
            Welcome To Website
          </Typography>

          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#00ADB5",
            }}
          >
            Kim dokja
          </Typography>

          <Button
            component={Link} to="login"
            variant="contained"
            sx={{
              mb: "30px",
              display: "block",
              mx: "auto",
              width: "200px",
              backgroundColor: "#393E46",
              fontWeight: "bold",
              textAlign:"center",
              color: '#EEEEEE'
            }}
          >
            Go To Login
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default HomeUI;
