import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import {
  Formik, Field, Form,
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withPickerValues
} from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { grey, amber, red } from '@mui/material/colors';

import CustomInput from './CustomInput';

import i18n from '../rucherModule/services/i18n';
// ne fontionne pas

const CustomToggleButton = (props) => {
  var {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched, setFieldValue }, label, labD = 4, fieldD = 8, required = false, index,
    champ, selection,  
    ...inputProps    
  } = props

  console.log(props);
  return (
    <>
      {/*    <View style={styles.container}> */}

      <ToggleButton sx={{
        width: 1, "&.MuiToggleButton-root.Mui-selected": {
          backgroundColor: amber[600]
        }, "&.MuiToggleButton-root.Mui-selected.MuiSvgIcon-root": {
          color: "red"
        }
      }} value={champ} selected={selection}
        onClick={(val) => {
          selection = !selection;
          setFieldValue("'" + champ + "'", selection)
        }
        }>{label}
      </ToggleButton>
    </>
  )
}

export default CustomToggleButton;
