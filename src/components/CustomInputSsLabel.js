import React from 'react'
import { Container, Row, Col, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { grey, amber, red } from '@mui/material/colors';

const CustomInputSsLabel = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched }, label, 
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
{/*    <View style={styles.container}> */}
      <input
        style={
          styles.textInput 
          }
        value={value}
        onChange={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <p style={styles.errorText}>{errors[name]}</p>}
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




export default CustomInputSsLabel
