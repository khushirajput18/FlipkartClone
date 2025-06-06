// src/component/CustomButtons.jsx

import React, { useContext, useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/loginDialog';
import { DataContext } from '../../context/Dataprovider';  // Corrected path to context
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '0 3% 0 auto',
  gap: 40, // replaces marginRight

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
    margin: '16px',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  [theme.breakpoints.down('md')]: {
    paddingTop: 4,
  },
}));

const LoginButton = styled(Button)`
  background: #fff;
  color: #2874f0;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account,setAccount } = useContext(DataContext);  

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount}></Profile>
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
