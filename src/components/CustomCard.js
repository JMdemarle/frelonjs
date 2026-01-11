import React from 'react';
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, ButtonGroup, Dropdown } from "react-bootstrap";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey, amber, green } from '@mui/material/colors';
import Grid2 from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

const CardContentNoPadding = styled(CardContent)(`
  padding-left: 0;   padding-right: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const CustomCard = (props) => {
  const {
    label, largeur = 4, destination, variant = 'h5', children, param,
    ...inputProps
  } = props;

  const navigate = useNavigate();
  console.log(destination);
  //       {!!children ? (<p>{children}</p>) : <><p>.</p></>}

  {/*    <View style={styles.container}> */ }
  return (

    <Grid2 size={largeur} display="flex" >
      <Card sx={{ bgcolor: amber[50], boxShadow: 2, height: '100%', width: '100%' }} justifyContent='center' variant="outlined">
        <CardActionArea onClick={() => { navigate(destination, {state:  {param}} )}} sx={{ height: '100%' }}>
          <CardContentNoPadding >
            <Typography variant={variant} component="div" align="center"   style={{ wordWrap: "break-word" }}
            >
              {label}
            </Typography>
          </CardContentNoPadding>
        </CardActionArea>
        {children}
      </Card>
    </Grid2>


  )
}

export default CustomCard;


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

