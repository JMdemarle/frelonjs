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
  lePiegeStore, leReleveStore

} from '../../store/frelonslice';

import {
  setAffCreePiege, setAffCreeReleve,setAffModReleve, setAffDelPiege, setAffListPieges, setAffListReleves,
  setAffDelReleve, 

} from '../../store/frelondisplayslice';

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

function ListReleves() {
  console.log('entree List Releves');
  const { lesRelevesDuPiege, lePiege } = useSelector(state => state.frelon);
  console.log(lesRelevesDuPiege);
  lesRelevesDuPiege.map((releve) => {
    console.log(releve);
    releve.comptages.map((comptage) => {
      console.log(comptage);
    })
  })
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();

  if (user) {
    const langue = user.langage;
  }
  let itemApi = user.id;


  const dispatch = useDispatch()


  const handleAffichePiege = (pige) => {

  };


  const nouveauReleve = () => {
        //dispatch(leReleveStore(piege));

    dispatch(setAffCreeReleve(true));
  };


  const handleEditClick = (releve) => {
    console.log('handleEditClick');
    console.log(releve);
    dispatch(leReleveStore(releve));
    dispatch(setAffModReleve(true));
  };


  const handleDelClick = (piege) => {
    dispatch(leReleveStore(piege));
    dispatch(setAffDelReleve(true));
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
              <CustomTitre titre={"Les relevés de " + lePiege.nom} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <IconButton onClick={() => {
                dispatch(setAffListReleves(false)); dispatch(setAffListPieges(true));
              }} >
                <CancelPresentationIcon sx={{ fontSize: 30, color: grey[900] }} />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="h4" component="div" align="center">
          </Typography>
          <Divider />
          <CustomTextStd2 label='' contenu={lePiege.nomTypePiege} />
          <CustomTextStd2 label='' contenu={lePiege.libCampagne} />
          {lesRelevesDuPiege.map((releve) => (

            <Box sx={{ m: 1 }} key={releve.id}>
              <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'center' }}>
                <Box style={{ flex: 11, flexDirection: 'column' }}>

                  <Card variant="outlined" sx={{ backgroundColor: amber[50], borderColor: amber[800], border: 1, borderRadius: '10px', }}
                    onClick={() => { handleAffichePiege(lePiege) }}
                  >
                    <CardActionArea >
                      <CardContent>
                        <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'left' }}>
                          <Box style={{ flex: 1 }} >
                            <CustomTextStd2 label='' contenu={releve.date} />
                          </Box>
                          <Box style={{ flex: 2 }} >
                            <CustomTextStd2 label='' contenu={releve.nomAppat} />
                          </Box>
                          <Box style={{ flex: 2 }} >
                            <CustomTextStd2 label='' contenu={releve.detailAppat} />
                          </Box>
                        </Box>
                        <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'left' }}>

                          {releve.comptages.map((comptage, indexCapture) => (
                            <Box key={indexCapture} style={{ flex: 1 }}>
                              <CustomTextStd2
                                label={comptage.nomTypeInsecte} contenu={comptage.nombre}
                                labD={9} fieldD={3} />
                            </Box>
                          ))}
                        </Box>



                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
                  <>
                    <Tooltip title={<Typography fontSize={20}>Modifier</Typography>} placement="right-start" sx={{ fontSize: 200 }}>
                      <IconButton onClick={() => { handleEditClick(releve) }} sx={{ color: green[700] }} >
                        <EditIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={20}>Supprimer</Typography>} placement="right-start" sx={{ fontSize: 200 }}>
                      <span>
                        <IconButton onClick={() => { handleDelClick(releve) }} sx={{ color: red[700] }}
                        >
                          <DeleteIcon sx={{ fontSize: 30 }} />
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
                  <Button variant="text" endIcon={<AddCircleOutlineIcon />} onClick={() => { nouveauReleve(); }}>
                    Nouveau Releve
                  </Button>
        
                </Box>
      </Paper>
    </>
  )
};
// <Button type="submit" onClick={() => { dispatch(toggleAffReine()); dispatch(setAffReine(true)) }} >Modifier</Button>

export default ListReleves;