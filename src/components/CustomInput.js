import React from 'react'
import { Container, Row, Col, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { grey, amber, red } from '@mui/material/colors';



  const CustomInput = (props) => {
    const {
      field: { name, onBlur, onChange, value },
      form: { errors, touched, setFieldTouched }, label, labD = 4, fieldD = 8, required = false, 
      ...inputProps
    } = props

    const hasError = errors[name] && touched[name]
    //console.log(props);
    return (
      <>
  {/*    <View style={styles.container}> */}
      <Grid container display="flex"     alignItems="center">

        <Grid size={labD} sx={{pt:1, pl:1, color:grey[600]}}  display="flex">
          {label && <><Typography>{label} </Typography>
          { required && <Typography color={amber[900]}>&nbsp;*</Typography>} </>}
        </Grid>
        <Grid size={fieldD}>
        <input
          style={          styles.textInput } 
          value={value}
          rows={3}
          onChange={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name)
            onBlur(name)
          }}
          ref={inputProps.inputRef}

          {...inputProps}
        />
        </Grid>
        {hasError && <p style={styles.errorText}>{errors[name]}</p>}
        </Grid>
      </>
    )
  }

let styles = {
  textInput: {
    height: 25,
    width: '100%',
    margin: 0,
    backgroundColor: 'white',
    borderColor: amber[800],
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
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  }
}


export default CustomInput;
