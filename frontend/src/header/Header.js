import React,{ useState } from 'react';
import{ AppBar,Tab,Tabs, Toolbar} from '@mui/material';
import {Link} from "react-router-dom";
import home from '../home/Home'
import logo from '../assets/image.png';
import './Header.css'
import { useSelector } from 'react-redux';
const linksArr=["home", "diaries","auth"];
const loggedInLinks = ["home", "diaries", "add", "profile"];
const Header = () => {
const isLoggedIn = useSelector(state=>state.isLoggedIn);
const [value,setValue] = useState();
return (
<AppBar sx={{bgcolor:'transparent',position:"sticky"}}>
    <Toolbar> 
        <a href={home}><img className='app-logo' src={logo} alt="logo" width="80px" height="40px" /></a> 
            <Tabs
             value={value} onChange={(e,val)=>setValue(val)}  
             sx={{ml:"auto",textDecoration:"none"}}
             > 
            {isLoggedIn
             ? loggedInLinks.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                      textShadow: "0 0 25px bold black",
                      fontWeight: "bold"
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))
             : linksArr.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                    key={link} 
                    label={link} />
                ))}
            </Tabs>
    </Toolbar>
  </AppBar>
);
};

export default Header;
