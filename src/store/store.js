import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './userslice';
import frelontype from './frelontypeslice';
import frelon from './frelonslice';
import display from './displayslice';
import displayFrelon from './frelondisplayslice';


const reducer = combineReducers({
  // here we will be adding reducers
  user, 
  frelontype,
  frelon,
  displayFrelon, 
  display

})
const store = configureStore({
  reducer,
})
export default store;