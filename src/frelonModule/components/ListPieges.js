import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';



import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import EditIcon from '@mui/icons-material/Edit';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import ListAltIcon from '@mui/icons-material/ListAlt';


import Tooltip from '@mui/material/Tooltip';

import { red, amber, grey, orange, green } from '@mui/material/colors';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';


import CustomTextStd2 from '../../components/CustomTextStd2';
import CustomTitre from '../../components/CustomTitre';



import {
  lePiegeStore, lesRelevesDuPiegeStore

} from '../../store/frelonslice';

import {
  setAffCreePiege, setAffModPiege, setAffDelPiege, setAffListPieges,
  setAffListReleves

} from '../../store/frelondisplayslice';
import { getRelevesduPiege } from '../services/accesFrelon';


import { BluetoothAudio } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: amber[100],
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ListPieges() {
  console.log('entree eaff');
  const { lesPiegesDePiegeur } = useSelector(state => state.frelon);
  console.log(lesPiegesDePiegeur);
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();

  if (user) {
    const langue = user.langage;
  }
  let itemApi = user.id;


  const dispatch = useDispatch()


  const handleAffichePiege = (pige) => {

  };


  const nouveauPiege = () => {
    dispatch(setAffCreePiege(true));
  };


  const handleEditClick = (piege) => {
    console.log('handleEditClick');
    console.log(piege);
    dispatch(lePiegeStore(piege));
    dispatch(setAffModPiege(true));
  };


  const handleDelClick = (piege) => {
    dispatch(lePiegeStore(piege));
    dispatch(setAffDelPiege(true));
  };

  const handleListClick = (piege) => {
    console.log('handleListClick');
    console.log(piege);
    dispatch(lePiegeStore(piege));
    dispatch(setAffListPieges(false));

    Promise.all([getRelevesduPiege(piege.id)])
      .then(async ([releves]) => {
        console.log(releves);
        dispatch(lesRelevesDuPiegeStore(releves));
        dispatch(setAffListReleves(true));
      })
      .catch((error) => {
        console.log(error);
      });

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
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ flex: 9 }}>
              <CustomTitre titre="Mes Pièges" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <IconButton onClick={() => { dispatch(setAffListPieges(false)); navigate('/') }} >
                <CancelPresentationIcon sx={{ fontSize: 30, color: grey[900] }} />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="h4" component="div" align="center">
          </Typography>
          <Divider />
          {lesPiegesDePiegeur.map((piege) => (

            <Box sx={{ m: 1 }} key={piege.id}>
              <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'center' }}>
                <Box style={{ flex: 11, flexDirection: 'column' }}>

                  <Card variant="outlined" sx={{ backgroundColor: amber[50], borderColor: amber[800], border: 1, borderRadius: '10px', }}
                    onClick={() => { handleAffichePiege(piege) }}
                  >
                    <CardActionArea >
                      <CardContent>
                        <CustomTextStd2 label='' contenu={piege.nom} />
                        <CustomTextStd2 label='' contenu={piege.nomTypePiege} />
                        <CustomTextStd2 label='' contenu={piege.libCampagne} />


                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box sx={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
                  <>
                    <Tooltip title={<Typography fontSize={20}>Modifier</Typography>} placement="right-start" sx={{ fontSize: 200 }}>
                      <IconButton onClick={() => { handleEditClick(piege) }} sx={{ color: green[700] }} >
                        <EditIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={20}>Supprimer</Typography>} placement="right-start" sx={{ fontSize: 200 }}>
                      <span>
                      <IconButton onClick={() => { handleDelClick(piege) }} sx={{ color: red[700] }} 
                        disabled={piege.nbReleves > 0} >
                        <DeleteIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                      </span>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={20}>Lister</Typography>} placement="right-start" sx={{ fontSize: 200 }}>
                      <span>
                      <IconButton onClick={() => { handleListClick(piege) }} sx={{ color: BluetoothAudio[700] }} 
                        disabled={piege.nbReleves == 0} >
                        <ListAltIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                      </span>
                    </Tooltip>

                  </>
                </Box>

              </Box>
            </Box>
          ))}

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button variant="text" endIcon={<AddCircleOutlineIcon />} onClick={() => { nouveauPiege(); }}>
            Nouveau Piege
          </Button>

        </Box>


      </Paper>
    </>
  )
};
// <Button type="submit" onClick={() => { dispatch(toggleAffReine()); dispatch(setAffReine(true)) }} >Modifier</Button>

export default ListPieges;