import React from 'react'

import { Container, Row, Col,  ButtonGroup, Dropdown } from "react-bootstrap";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { grey, amber, green } from '@mui/material/colors';



const CustomTextStd = (props) => {
  const {
   label, children, labD = 4, fieldD = 8,
    ...inputProps
  } = props; 


  //       {!!children ? (<p>{children}</p>) : <><p>.</p></>}

{/*    <View style={styles.container}> */}
  return (
    <Box>
    <Grid container display="flex"  sx={{p:0.3}}   alignItems="flex-end">
      <Grid size={labD}>{label}</Grid> 
      <Grid size={fieldD}>
      <Typography sx={{bgcolor:amber[50]}}>
      {children}
      </Typography>
      </Grid>
    </Grid>
   </Box>



  )
}

export default CustomTextStd


let styles = {
  textInput: {
    height: 30,
    width: '95%',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  },
  label: {
    flex: 1 
  },
  
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  }
}

