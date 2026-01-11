import React from 'react';

import { useFormikContext, useField } from "formik";

import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import MuiInput from '@mui/material/Input';
import { grey, amber, red } from '@mui/material/colors';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';




const CustomSlider = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched }, label, required = false,
    labD = 2, fieldD = 1, sliderD = 3, index, minValD = 0, maxValD = 12,

    ...inputProps
  } = props

  const checkValue = (value) => {
    console.log('check');
    console.log(value);
    if (parseInt(value)) {
      if (parseInt(value) <= maxValD) {
        return (value)
      }
      else {
        return (maxValD.toString())
      }

    }
    else return "";

  };

  const hasError = errors[name] && touched[name]
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  return (
    <>
      {/*    <Grid style={styles.container}> */}
      <Grid container direction='row' spacing={2} sx={{marginTop: '0px', marginLeft :'10px', marginBottoù: '0px'}}>
        <Grid item xs={4} sx={{marginLeft :'0px'}}>

          <Typography>{label} </Typography>
          {required && <Typography style={{ color: 'red' }}>*</Typography>}
        </Grid>
        <Grid item xs={1} alignItems="center"     >


          <input
            style={styles.textInput}
            value={value}
            rows={1}
            onChange={(event) => { console.log(event.target.value); setFieldValue(name, checkValue(event.target.value)) }}
            onBlur={() => {
              setFieldTouched(name)
              onBlur(name)
            }}
            {...inputProps}
          />
        </Grid>


        <Grid item xs={7}>
          <Slider
            min={minValD}
            step={1}
            max={maxValD}
            value={parseInt(value)}
            marks
            onChange={(event, sliderValue) => { setFieldValue(name, sliderValue?.toString()); onChange(); }}
            aria-labelledby="input-slider"
          />
        </Grid>

      </Grid>

      {hasError && <Typography >{errors[name]}</Typography>}
    </>
  )
}
/*
const styles = StyleSheet.create({
  textInput: {
    height: 30,
    width: '95%',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    textAlignVertical: 'top',
    
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    flexDirection: 'row',
    justifyContent: "space-between",
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

export default CustomSlider;

/*
   <TextField

          value={value}
          onChangeText={(text) => onChange(name)(checkValue(text))}
          onBlur={() => {
            setFieldTouched(name)
            onBlur(name)
          }}
          textAlign={'center'}
        />

        <Slider
          maximumValue={maxValD}
          minimumValue={minValD}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          thumbTintColor='#f5dd4b'
          step={1}
          value={parseInt(value)}
          style={[

            { flex: sliderD }

          ]}
          onValueChange={
            (sliderValue) => setFieldValue(name, sliderValue?.toString())}
          {...inputProps}


        />

                  <Grid item>

            <input
              style={styles.textInput}
              value={value}
              rows={1}
              onChange={(text) => onChange(name)(checkValue(text))}
              onBlur={() => {
                setFieldTouched(name)
                onBlur(name)
              }}
              {...inputProps}
            />
          </Grid>


                    <TextField
            id="outlined-controlled"
              variant="filled"
            size="small"
            value={value}
            margin='dense'
            onChange={(event) => { console.log(event.target.value); setFieldValue(name, checkValue(event.target.value)) }}
            sx={{
              width: '100%',
              '& .MuiFilledInput-root': {
                backgroundColor: 'white'
              },
              input: {textAlign: "center",     }
            }}
          />

                    <TextField
            id="outlined-controlled"
              variant="filled"
            size="small"
            value={value}
            margin='dense'
            onChange={(event) => { console.log(event.target.value); setFieldValue(name, checkValue(event.target.value)) }}
            sx={{
              width: '100%',
              '& .MuiFilledInput-root': {
                backgroundColor: 'white'
              },
              input: {textAlign: "center",     }
            }}
          />
*/
