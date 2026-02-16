import React, { useState, useEffect, } from 'react';
import { useNavigate } from "react-router-dom";

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { grey, amber, green, red } from '@mui/material/colors';


import { useSelector, useDispatch } from 'react-redux';
import MenuBar from './components/MenuBar';
import CustomCard from './components/CustomCard';

import { setTitreBar } from './store/displayslice';

import { login, retrievePiegeurTotal, postPasswordReset } from './userModule/services/authentification';
import { userStore } from './store/userslice';

const CardContentNoPadding = styled(CardContent)(`
  padding-left: 0;   padding-right: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);


function HomeScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const { user } = useSelector(state => state.user);
  const [ErrorMessage, setErrorMessage] = useState('');


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

  useEffect(() => {
    if (!user) {
      if (token) {
        Promise.all([retrievePiegeurTotal(),])
          .then(async ([userValues,]) => {
            dispatch(userStore(userValues));
          })
          .catch((res) => handleLoadingError(res))

      }


    }

  }, []);

  const handleLoadingError = (res) => {
    if (res.status === 1401) {
      navigate('Login');
    } else {
      console.log("else");
      //console.log(res);
      console.log(res.message);
      //console.log(typeof(res.message));
      //console.log(res.message);
      setErrorMessage(res.message);
    };
  };



  dispatch(setTitreBar('HOME'));
  const [color, changeColor] = useState("#fff8e1");

  document.body.style.backgroundColor = color;
  document.body.style.margin = 0;


  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        height="100%" // prend toute la hauteur disponible de son parent
      >
        <MenuBar />
        <Grid2 container>

          <Grid2 xs={4} >
            <Paper elevation={10} sx={{ m: 1, bgcolor: amber[100] }} >
              <div style={{ height: 400, width: '100%' }}>
                <Typography variant="h4" align="center">
                  Piégeage Frelon à Pattes Jaunes
                </Typography>

                <Grid2 container alignItems="stretch" sx={{ m: 1 }}>
                  <CustomCard label='Pièges' destination='/pieges' largeur={4} variant='h5' />
                  <CustomCard label='Relevés' destination='/captures' largeur={4} variant='h5' />
                </Grid2>
                <Typography variant="body2" color="text.secondary" align="left">
                  V1.1
                </Typography>
              </div>
            </Paper>
          </Grid2>


          {ErrorMessage ? (
            <>
              <Divider variant="middle" />
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <ReportProblemIcon sx={{ fontsize: 20, color: red[700] }} />
                <Typography fontSize={20} sx={{ color: red[700] }}>{ErrorMessage}</Typography>
              </Stack>
            </>
          ) : null}
        </Grid2>

      </Box>
    </>
  );
}


export default HomeScreen;


