import React from 'react'
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { grey, amber } from '@mui/material/colors';



const CustomSwitchHoriz = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldValue },
    label, labD = 2, fieldD = 1,
    ...inputProps
  } = props


  return (
    <>
      {/*    <Grid style={styles.container}> */}

      <Grid container direction='row'>
        <Grid size={labD}>
          <Typography style={{ flex: 2 }} sx={{ pt: 1, pl: 1, color: grey[600] }}>{label}</Typography>
        </Grid>

        <Grid style={{ flex: 1, alignSelf: 'center' }} size={fieldD}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            slotProps={{ input: { 'aria-label': 'controlled' } }}

            checked={value}
            onChange={event => setFieldValue(name, event.target.checked)}
            sx={{
              "&.MuiSwitch-root .MuiSwitch-switchBase": {
                color: "#777675ff"
              },


                            "&.MuiSwitch-root .Mui-checked": {
                color: "#f88603ff"
              }
            }}
            {...inputProps}


          />
        </Grid>
      </Grid>

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
  flexDirection: 'row',
  alignItems: 'flex-start',
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
})
*/
export default CustomSwitchHoriz;
