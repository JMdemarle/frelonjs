import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux'
import { reineStore } from '../../store/reineslice'
import {jwtStore, jwtRevoke} from '../../store/userslice'


export const getToken = async () => {
  const { jwt } = useSelector(state => state.user);
  return jwt;
};


export const setToken =  (token) => {

  const dispatch = useDispatch();
  dispatch(jwtStore(token));
}; 

/* export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth_token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
  } catch (e) {
    console.log('pb token');
    console.log(e);
    return null;
  }
}; */
