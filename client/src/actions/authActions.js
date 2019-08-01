import {SET_CURRENT_USER , GET_ERRORS } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthtoken';
import jwt_decode from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
  // Ready to fire my API
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const loginUser = userData => dispatch => {
  // Ready to fire my API
  axios 
    .post('/api/users/login', userData)
    .then(res => {
      // Take the token from the res 
      const {token} = res.data

      // Set token to local storage 
      localStorage.setItem('jwtToken', token);

      // Set token to auth header
      setAuthToken(token); 

      // Decode token to get user data
      const decoded = jwt_decode(token)

      // Set current user in the Redux store
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );  
}

export const logoutUser = () => dispatch => {
    // (1) Remove token from local storage 
    localStorage.removeItem('jwtToken');
  
    // (2) Remove token form auth headers 
    setAuthToken(false);
  
    // (3) Clean the user data from Redux store
    dispatch(setCurrentUser({}));
  }