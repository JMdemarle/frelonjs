import React from 'react'
import { Container, Row, Col, ButtonGroup, Dropdown } from "react-bootstrap";
import get from "lodash.get"; // pour accéder facilement aux erreurs imbriquées

//import Select from "react-select";
/* import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button
} from "@material-ui/core"; */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';


import { grey, amber } from '@mui/material/colors';
import { NearMe } from '@mui/icons-material';


//import i18n from '../rucherModule/services/i18n';



const CustomPicker = (props) => {
  const {

    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched, setFieldValue },

    liste, ModeModif, label, itemLabel, itemKey, langue, selectedValue,
    handleChange, labD = 4, fieldD = 8, NomListObjet = "nom", required = false, ...inputProps
  } = props
  // Utilisation de lodash.get pour récupérer les erreurs imbriquées
  const fieldTouched = get(touched, name);
  const fieldError = fieldTouched && get(errors, name);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',  flex: 0 }}>

        <Box sx={{ flex: labD  , display: 'flex', pt: 1, pl: 0,  m:0, color: grey[600] }} >
          {label && <><Typography>{label} </Typography>
            {required && <Typography color={amber[900]}>&nbsp;*</Typography>}</>}
        </Box>
        <Box sx={{ flex: fieldD , display: 'flex', pt: 1, pl: 0, m:0,color: grey[600] }} >
          <FormControl variant="standard" fullWidth sx={{ m: 0, minWidth: 40, bgcolor: 'white' }} size="small" margin="dense">

            <Select
              name={name}
              value={selectedValue}
              onChange={(itemvalue) => handleChange(itemvalue)}
            >

              {liste.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option[NomListObjet]}
                </MenuItem>))
              }
            </Select>
          </FormControl>
        </Box>
        {fieldError && <p style={styles.errorText}>{fieldError}</p>}

      </Box>
    </>
  )
}
//                      {(ModeModif == false) && <Picker.Item color='red' key={0} label="à sélectionner" value={'0'} />}
export default CustomPicker


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
    fontSize: 12,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  }
}

//options={construitListe(liste, itemLabel, itemKey)}

/*
                <Select
                  placeholder={{label:"à sélectionner", value: '-1', key: null, color: 'red'}}
                  value={selectedValue}
                  onChange={(itemValue, itemIndex) =>  {handleChange(itemValue)}}
                  
                  isSearchable={true}
                  options={options}
                  name="year"
                  isLoading={false}
                  loadingMessage={() => "Fetching year"}
                  noOptionsMessage={() => "Year appears here"}
                />
*/
/*
<Select
                 value={selectedValue}
                 options={options}
                 name={name}
                 isLoading={false}
                 loadingMessage={() => "Fetching year"}
                 noOptionsMessage={() => "Year appears here"}
               />

*/