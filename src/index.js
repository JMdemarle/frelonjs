import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginScreen from './userModule/screens/LoginScreen'
import HomeScreen from './HomeScreen'



import NewPasswordScreen from './userModule/screens/NewPasswordScreen'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import store from './store/store'
import { Provider } from 'react-redux'
import PiegesScreen from './frelonModule/screens/PiegesScreen';
import CapturesScreen from './frelonModule/screens/CapturesScreen';

import 'leaflet/dist/leaflet.css';

// Gestion icône leaflet
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// Bootstrap CSS
//import "bootstrap/distbootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl: iconShadow,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="/Pieges" element={<PiegesScreen />} />
          <Route path="/Captures" element={<CapturesScreen />} />
          {/* <Route path="/releves" element={<RelevesScreen />} />
           <Route path="reine" element={<ReineScreen />} />  
    <Route path="reine/:nomReine" element={<ReineScreen />} />  

    <Route path="edition" element={<EditionScreen />} /> 
    <Route path="eleveur" element={<EleveurScreen />} /> 
    <Route path="colonies" element={<ColoniesScreen />} /> 
    <Route path="ruchers" element={<RuchersScreen />} /> 
    <Route path="delegues" element={<DelegueScreen />} /> 

    <Route path="NewPassword" element={<NewPasswordScreen />} /> 
    <Route path="journal" element={<JournalScreen />} /> 
    <Route path="biometrie" element={<BiometrieScreen />} /> 
     */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//      <Route path="/"> <App /></Route>
// <Route path="/login"> <LoginScreen /></Route>
