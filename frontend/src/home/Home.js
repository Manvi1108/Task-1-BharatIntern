import { Box,Button, Typography } from '@mui/material'
import React from 'react'
import "./Home.css";
import image from './bg-removebg-preview.png'
import { Link } from 'react-router-dom';
// import TypeWriterEffect from 'react-typewriter-effect';


function Home() {
  return (
    <Box position={"relative"} width="100%" height="90vh" className='body'>
      <Box width="100%" height="100%" display={"flex"} flexDirection="column" >
          <div className='poll'>
            <div className='main'>
              <div className="content"> Content <br></br>Writing</div>
              <br />
              <div className="content2" marginLeft={2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Duis ut enim lobortis, venenatis lectus nec, elementum augue.</div>
            </div>
            <div className='image'> <img src={image} alt="" srcset=""/></div>
          </div>
          <Typography  className='text' textAlign={"center"} variant='h4' padding={4} marginRight={50} fontFamily={'dancing script'}>
          Share  Your Stories
          </Typography>
          <Box marginLeft={30}>
            <Button  LinkComponent={Link} to="/add" className='button' variant='contained' sx={{mr:13}} color='success'> Share Your Story</Button>
            <Button  LinkComponent={Link} to="/diaries" className='button' variant='contained' color='success'> View Blog</Button>
          </Box>
        </Box>
    </Box>
  );

};

export default Home
