import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';


import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import {
  Formik, Field, Form,
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withPickerValues
} from 'formik';
import * as yup from 'yup';

import { Button, Container, ButtonGroup, Dropdown } from "react-bootstrap";
import { login, retrieveApiculteurTotal, postPasswordReset } from '../services/authentification';

import { useDispatch, useSelector } from 'react-redux'

import { setAffResetPassword } from '../../store/displayslice'

//import { setToken } from '../services/token';
//import { setLangue, getLangue } from '../../rucherModule/services/getLangue';


import CustomInput from '../../components/CustomInput';
import { ConstructionOutlined } from '@mui/icons-material';
//import CustomButton from '../../components/CustomButton';
//import MyModal from '../../components/MyModal';
//import { headerStyles } from '../../components/Styles';

//import i18n from '../../rucherModule/services/i18n';
//import {setIdApplication, getIdApplication} from '../../services/splash';
//import { version } from '../../secrets';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ResetPassword = ({ affiche, ...props }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { affResetPassword } = useSelector(state => state.display)


  const navigate = useNavigate();
  //const handleOpen = () => toggleAff(true);
  //const handleClose = () => toggleAff(false);


  const toggleLogin = () => {


  }
  const FormonSubmit = (data) => {

    postPasswordReset(data.email)
      .then(setVisible(true))

      .catch((err) => {
        console.log({ err });
        console.log(err.message);
        setErrorMessage(err.message);
      })
  };



  const Initialisation = () => {
    const init = new Object();
    init.email = "";
    return init
  };

  const ValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required('emailObligatoire'),
  });



  return (
    <Modal
      open={affResetPassword}
      onClose={() => { dispatch(setAffResetPassword(false)) }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Paper>
        <Box sx={style}>
          <Formik
            initialValues={Initialisation()}
            validationSchema={ValidationSchema}
            onSubmit={values => FormonSubmit(values)}
          >
            {({
              handleSubmit, isValid, values, setFieldValue, setFieldTouched,
              errors, touched, handleTextInput, withPickerValues, handleChange, handleBlur
            }) => (
              <>
                <div>


                  <Form>
                    <Container>
                      <Typography variant="h5">Reinitialisation de mon Mot de passe </Typography>
                      <p></p>
      <Collapse in={visible}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setVisible(false);
                dispatch(setAffResetPassword(false));
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          La demande est bien partie. Surveillez vos mails
        </Alert>
      </Collapse>
                      <Field component={CustomInput} name="email" label={'Email'} placeholder={'Adresse mail'} required={true} />
                      {errorMessage ? (
                        <>
                          <Divider variant="middle" />
                          <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                          >
                            <ReportProblemIcon sx={{ fontsize: 20, color: red[700] }} />
                            <Typography fontSize={20} sx={{ color: red[700] }}>{errorMessage}</Typography>
                          </Stack>
                        </>
                      ) : null}
                      <Grid container display="flex" justifyContent="flex-end">

                        <IconButton onClick={handleSubmit} sx={{ color: green[700] }} >
                          <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                      </Grid>

                    </Container>

                  </Form>



                </div>
              </>
            )}
          </Formik>
        </Box>
      </Paper>
    </Modal>
  );
}


export default ResetPassword;



