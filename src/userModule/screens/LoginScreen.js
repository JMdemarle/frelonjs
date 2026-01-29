import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {
  Formik, Field, Form,
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withPickerValues
} from 'formik';
import * as yup from 'yup';

import { Button, Container, ButtonGroup, Dropdown } from "react-bootstrap";
import { login, retrievePiegeurTotal } from '../services/authentification';

import { useDispatch, useSelector } from 'react-redux'
import { userStore } from '../../store/userslice'

//import { setToken } from '../services/token';
//import { setLangue, getLangue } from '../../rucherModule/services/getLangue';


import CustomInput from '../../components/CustomInput';
//import CustomButton from '../../components/CustomButton';
//import MyModal from '../../components/MyModal';
//import { headerStyles } from '../../components/Styles';

//import i18n from '../../rucherModule/services/i18n';
//import {setIdApplication, getIdApplication} from '../../services/splash';
//import { version } from '../../secrets';


function LoginScreen() {
  console.log('entree');
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const navigate = useNavigate();

  const FormonSubmit = (data) => {
    console.log("loginscreen");
    localStorage.setItem('token', null);
    console.log(data);
    login(data.username, data.password)
      .then(async (res) => {
        console.log('token reçu');
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res));
      })
      .then(async () => {
        Promise.all([retrievePiegeurTotal(),])
          .then(async ([userValues,]) => {

            dispatch(userStore(userValues));
            console.log('vers Home');

            navigate('/');
          })
      })
      .catch((err) => {
        console.log({ err });
        console.log(err.message);
      });

  };


  const Initialisation = () => {
    const init = new Object();
    init.username = "";
    init.password = "";
    return init
  };

  const ValidationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, 'tropCourt')
      .max(20, 'tropLong')
      .required('nomObligatoire'),
    password: yup
      .string()
      .required('motPasseObligatoire')
      .min(8, 'motPasseObligatoire'),
  });





  return (
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
            {(user) && (<div>
              Hi, {user.nom}!
            </div>)}

            <Form>
              <Container>
                {(user) && (<div>
                  Hi, {user.nom}!
                </div>)}
                <Field component={CustomInput} name="username" label={'Nom'} placeholder={'Nom'} />
                <Field component={CustomInput} name="password" label={'Mot de passe'} placeholder={'Mot de passe'} secureTextEntry={true} />

                <Button type="submit" onClick={handleSubmit}>Submit</Button>
              </Container>

            </Form>


          </div>
        </>
      )}
    </Formik>

  );
}


export default LoginScreen;


//onSubmit={console.log('sub');values => FormonSubmit(values)}

