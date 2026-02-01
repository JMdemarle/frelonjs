import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';

import { Container, Row, Col, ButtonGroup, Dropdown } from "react-bootstrap";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { grey, amber, green } from '@mui/material/colors';



const CustomTextStd2 = (props) => {
  const {
    label, contenu, children, labD = 4, fieldD = 8,
    ...inputProps
  } = props;

  //       {!!children ? (<p>{children}</p>) : <><p>.</p></>}

  {/*    <View style={styles.container}> */ }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', flex: 0, sp: 0.3 }}>

      {label.length != 0 &&
        <Box sx={{ flex: labD, display: 'flex' }} >

          <Typography sx={{ bgcolor: amber[50], color: grey[600] }}>
            {label}
          </Typography>
        </Box>}
      <Box sx={{ flex: fieldD, display: 'flex' }} >

        <Typography sx={{ bgcolor: amber[50] }}>
          {contenu}
        </Typography>
        {children}
      </Box>


    </Box>



  )
}

export default CustomTextStd2;


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

