import React,{ useState } from 'react';
import{ Tab,Tabs, Toolbar} from '@mui/material';
import {Link} from "react-router-dom";
// import home from '../home/Home'
// import logo from '../assets/image.png';
import './Header.css'
import { useSelector } from 'react-redux';
const linksArr=["home", "diaries","auth"];
const loggedInLinks = ["home", "diaries", "add", "profile"];
const Header = () => {
const isLoggedIn = useSelector(state=>state.isLoggedIn);
const [value,setValue] = useState();
return (
<div className='tabs'>
    <Toolbar>
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
                      textShadow: "0 0 200px bold black",
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
                      fontWeight: "bold",
                    },
                  }}
                    key={link} 
                    label={link} />
                ))}
            </Tabs>
    </Toolbar>
  </div>
);
};

export default Header;
