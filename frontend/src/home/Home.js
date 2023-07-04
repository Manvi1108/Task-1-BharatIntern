import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import image from '../assets/bg.avif';
import image1 from '../assets/bluebg.png';
import "./Home.css";
import { Link } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';


function Home() {
  return (
    <Box position={"relative"} width="100%" height="90vh" className='body'  sx=
    {{backgroundImage : `url(${image1})`}}>
      <Box className='images' sx={{
          backgroundImage : `url(${image})`,
          boxShadow: 1,
          borderRadius: 10
      }}>
        <Typography 
        variant="h4"
        fontFamily={"dancing script"}
        fontWeight="bold"
        textAlign={"center"} 
        width="100%"
        marginLeft={20}
        sx={{
          position:"absolute", 
          top:"0px" ,
          color:"#111119de",
          textShadow: "0 0 10px brown"
      }}
      >
      <span> <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            multiText={[
              "Together Creating a Better future"     
        ]}
            multiTextDelay={1000}
            typeSpeed={50}
            
          /></span>
      </Typography>
      {/* <Box height="10%></Box> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box width="100%" height="30%" display={"flex"}
      flexDirection="column"

      >
        <Typography  className='text' textAlign={"center"} variant='h4' padding={4} fontFamily={'dancing script'}>
        Share  Your Stories
        </Typography>
        <Box margin="auto">
        <Button  LinkComponent={Link} to="/add" variant="contained" sx={{ mr:2 , fontWeight:'light'}} > Share Your Story</Button>
        <Button  LinkComponent={Link} to="/diaries" variant="contained" sx={{ ml:2 }}> View Blog</Button>

            

        </Box>
      </Box>
        </Box>
      

  </Box>
  );

};

export default Home
