import React from 'react'
// import { Text, TextInput, StyleSheet, View , Switch} from 'react-native'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';



const CustomSwitch = (props) => {
  const {

    label, vSwitch, labD = 8, fieldD = 4,
    ...inputProps
  } = props

  return (
    <>

      <Box>

        <Grid container display="flex" alignItems="flex-end">

          <Grid size={labD}>{label}</Grid>
          <Grid size={fieldD}>
            <Switch
              checked={vSwitch}
              slotProps={{ input: { 'aria-label': 'controlled' } }}
              {...inputProps}
            />
          </Grid>
        </Grid>
      </Box>



    </>
  )
}

/*
const styles = StyleSheet.create({
  textInput: {
    flex:3,  
    height: 30,
    width: '80%',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
container: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
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
})
*/

export default CustomSwitch
