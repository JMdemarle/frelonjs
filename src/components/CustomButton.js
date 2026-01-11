import React from 'react';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CustomButton({ title, ...props }) {
  return (
    <Button {...props} style={styles.button}>
      <Typography style={styles.buttonLabel}>{title}</Typography>
    </Button>
  );
}

const styles = {
  button: { 
    alignSelf: 'center',
    //backgroundColor:'red',
    borderBottomColor:'grey',
    borderBottomWidth: 1,
    borderBottomRightRadius: 5,    
    borderBottomLeftRadius: 5,    
    borderRightColor: 'grey',
    borderRightWidth: 1,
    borderTopColor:'lightgrey',
    borderTopWidth: 0.5,
    borderTopLeftRadius: 5,    
    borderTopRightRadius: 5,    
    borderLeftColor: 'lightgrey',
    borderLeftWidth: 0.5,
    margin: 1,    
  },
  buttonLabel: {
    color: 'dodgerblue',
    fontSize: 18,
    height: 25,
  },
};
