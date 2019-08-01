import {SET_CURRENT_USER , GET_ERRORS } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthtoken';
import jwt_decode from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
  // Ready to fire my API
  // Call axios.post('the path of my API, userData)
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

      // Dispatch to set current user 
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      })
    })
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