import React, { useState } from 'react'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { addPost } from "../api-helpers/helpers";
import { useNavigate } from 'react-router';




const Add = () => {
  const navigate =useNavigate();
  const[inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    date: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onResReceived = (data) => {
    console.log(data);
    navigate("/diaries");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addPost(inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };

  return (
    
     <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Add blog
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral  " }}
        />
      </Box>
      <form onSubmit={handleSubmit}> 
        <Box
          padding={3}
          display="flex"
          width="80%"
          margin="auto"
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand", fontWeight:"bold" }}>Title</FormLabel>
          <TextField
            onChange={handleChange}
            name="title"
            value={inputs.title}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand",fontWeight:"bold" }}>Description</FormLabel>
          <TextField
            onChange={handleChange}
            name="description"
            value={inputs.description}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" , fontWeight:"bold"}}>Image URL</FormLabel>
          <TextField
            onChange={handleChange}
            name="imageUrl"
            value={inputs.imageUrl}
            variant="standard"
            margin="normal"
          />

          <FormLabel sx={{ fontFamily: "quicksand" , fontWeight:"bold"}}>Location</FormLabel>
          <TextField
            onChange={handleChange}
            name="location"
            value={inputs.location}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", fontWeight:"bold" }}>Date</FormLabel>
          <TextField
            type="date"
            onChange={handleChange}
            name="date"
            value={inputs.date}
            variant="standard"
            margin="normal"
          />
          <Button
            type="submit"
            color="success"
            sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
          >
            Post
          </Button>
        </Box>
      </form>

    </Box>
  );
  
};

export default Add;
