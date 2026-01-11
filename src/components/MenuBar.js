import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { grey, amber, green } from '@mui/material/colors';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { styled, useTheme } from '@mui/material/styles';


import { useDispatch, useSelector } from 'react-redux'
import { userStore, userRevoke } from '../store/userslice'
import MonLogin from '../userModule/components/MonLogin';
import ResetPassword from '../userModule/components/ResetPassword';
import CreateAccount from '../userModule/components/CreateAccount';

import { login, retrieveApiculteurTotal, postPasswordReset } from '../userModule/services/authentification';
import isIncompatible from '../services/verifnavig'



import { setAffReine, setAffLogin } from '../store/displayslice'




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function MenuBar() {
  const theme = useTheme();

  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  //    const [affLogin, setAffLogin] = useState(false);
  const [affCreateAccount, setAffCreateAccount] = useState(false);
  const [open, setOpen] = useState(false);
  const [afficheSnack, setAfficheSnack] = useState(false);


  const { titreBar, affGenealogie, affLogin, affResetPassword } = useSelector(state => state.display)
  const { user } = useSelector(state => state.user);
  //const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;
  var token = '';

  if (localStorage.getItem('token')) {
    try {
      token = JSON.parse(localStorage.getItem('token'))
    } catch (e) {
      token = null;
    }
  } else {
    token = null;
  };
  const navigate = useNavigate();


  const drawerWidth = 240;


  const handleLogOut = () => {
    localStorage.setItem('token', '');
    setLoggedIn(false);
    dispatch(userRevoke());
    navigate('/');
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //test navigateur
    isIncompatible() ? setAfficheSnack(true) : setAfficheSnack(false);


  }, []);
  /*
  useEffect(() => {
    console.log('homme sreeen - useeffect');
    if (!user) {
      if (token) {
        Promise.all([retrieveApiculteurTotal(), getListTypFecondation(),])
          .then(async ([userValues, typFecValues]) => {
            console.log(userValues);
            dispatch(userStore(userValues));
            //dispatch(apiProprietaireStore (userValues.id));
            //dispatch(setAffVisite(false));

            dispatch(typfecondationStore(typFecValues));
            //dispatch(setAffReine(true));
            //toggleAff();
            //navigate('/reine');
          })


      }


    }

  }, []);
*/
  const handleCloseSnack = () => {
    setAfficheSnack(false);
  };

  return (
    <>
      <Snackbar open={afficheSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="info" sx={{ width: '100%' }} >
          Votre navigateur ne semble pas compatible avec toutes les fonctionnalités et pourrait afficher des résultats surprenants.
          Il est conseillé de le mettre à jour (ne serait-ce que pour des question de sécurité).
        </Alert>
      </Snackbar>
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: amber[900] }} variant='dense'>
          <IconButton
            size="medium"
            onClick={handleDrawerOpen}

            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {titreBar}
          </Typography>
          {user ?
            <Button color="inherit" onClick={() => { handleLogOut() }}>Logout</Button> :
            <>
              <Button color="inherit" onClick={() => { setAffCreateAccount(true) }}>Création compte</Button>
              <Button color="inherit" onClick={() => { dispatch(setAffLogin(true)) }}>Connexion</Button>
            </>
          }
        </Toolbar>
      </AppBar >
      {/* 2ème toolbar nécessaire pour rester fixée*/}
      <Toolbar variant='dense' />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Button onClick={() => { navigate('/') }}>Home</Button>

        <Divider />
        <Divider />
        <Divider />
        <Button onClick={() => { navigate('/pieges') }}>Pièges</Button>
        {user &&
          <Button onClick={() => { navigate('/captures') }}>Captures</Button>}

      </Drawer>

      {affLogin && <MonLogin />}

      {affResetPassword && <ResetPassword />}
      <CreateAccount toggleAff={setAffCreateAccount} affiche={affCreateAccount} />
    </>
  );
}

export default MenuBar;
