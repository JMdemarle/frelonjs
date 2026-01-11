import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';



import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import EditIcon from '@mui/icons-material/Edit';

import Tooltip from '@mui/material/Tooltip';

import { red, amber, grey, orange, green } from '@mui/material/colors';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';


import CustomTextStd2 from '../../components/CustomTextStd2';



import {
  leDelegueStore, leDelegueRevoke, lesDeleguesStore, lesDeleguesRevoke,
  lEntreeStore, lEntreeRevoke, lesEntreesStore, lesEntreesRevoke,

} from '../../store/delegueslice';

import {
  setAffDelegue, setAffModDelegue, setAffCreeDelegue, setAffDelDelegue, setAffLesDelegues,
  setAffEntree, setAffModEntree, setAffCreeEntree, setAffDelEntree, setAffLesEntrees,

} from '../../store/displayDelegueslice';

import {
  getListDelegue
} from '../services/authentification';



function AfficheLesDelegues() {
  console.log('entree eaff');
  const { lesDelegues } = useSelector(state => state.delegue);
  console.log(lesDelegues);
  const { user } = useSelector(state => state.user);

  const langue = user.langage;
  let itemApi = user.id;


  const dispatch = useDispatch()




  const nouveauDelegue = () => {
    dispatch(setAffModDelegue(false));
    dispatch(setAffCreeDelegue(true));
  };

  const handleEditClick = (Delegue) => {
    dispatch(leDelegueStore(Delegue));
    dispatch(setAffModDelegue(true));
  };


  const handleDelClick = (Delegue) => {
    console.log(Delegue);
    dispatch(leDelegueStore(Delegue));
    dispatch(setAffDelDelegue(true));
  };

  return (

    <>
      <Paper elevation={10} sx={{ m: 1, bgcolor: amber[100] }} >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          height: 640, overflow: "hidden", overflowY: "scroll",
        }}

        >
          <Typography variant="h4" component="div" align="center">
            Mes délégués
          </Typography>
          <Divider/>
          {lesDelegues.map((Delegue) => (

            <Box sx={{ m: 1 }} key={Delegue.id}>
              <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'center' }}>
                <Box style={{ flex: 11, flexDirection: 'column' }}>

                  <Card variant="outlined" sx={{ backgroundColor: amber[50], borderColor: amber[800], border: 1, borderRadius: '10px', }}
                    onClick={() => { }}
                  >
                    <CardActionArea >
                      <CardContent>
                        <CustomTextStd2 label='' contenu={Delegue.nomdelegue} />

                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
                  <>

                    <Tooltip title={<Typography fontSize={20}>Supprimer</Typography>} placement="right-start" sx={{ fontSize: 200 }}>
                      <IconButton onClick={() => { handleDelClick(Delegue) }} sx={{ color: red[700] }} >
                        <DeleteIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Tooltip>

                  </>
                </Box>

              </Box>
            </Box>
          ))}

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button variant="text" endIcon={<AddCircleOutlineIcon />} onClick={() => { nouveauDelegue(); }}>
            Nouveau Delegue
          </Button>

        </Box>


      </Paper>
    </>
  )
};
// <Button type="submit" onClick={() => { dispatch(toggleAffReine()); dispatch(setAffReine(true)) }} >Modifier</Button>

export default AfficheLesDelegues;