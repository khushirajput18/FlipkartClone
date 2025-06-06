import { Typography,Box, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import PowerSettingNewIcon from '@mui/icons-material/PowerSettingsNew'
// import { set } from "mongoose";
const Component=styled(Menu)`
margin-top:5px;
`
const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`
const Profile=({account,setAccount})=>{
 const [open,setOpen]=useState(false);
 const handeClick=(event)=>{
    setOpen(event.currentTarget)
 }
 const handelClose=()=>{
    setOpen(false)
 }
 const logout=()=>{
  setAccount('');
 }
    return (
        <>
        <Box onClick={handeClick}>
            <Typography style={{marginTop:"2" , cursor:'pointer'}} >{account}</Typography>
            <Component
           
            anchorEl={open}
            open={Boolean(open)}
            onClose={handelClose}
           
            >
           
           <MenuItem onClick={()=>{handelClose(); logout();}}>
            <PowerSettingNewIcon color="primary" fontSize="small"></PowerSettingNewIcon>
             <Logout>LogOut</Logout>
           </MenuItem>
            </Component>
        </Box>
        </>
    )
}
export default Profile;