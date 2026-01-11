import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CustomTitre({ titre, ...props }) {
  return (
    <Box>
       <Typography style={styles.title}>{titre}</Typography>
    </Box>
    
  );
}

const styles = {
    title: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',        
    },
  
};
