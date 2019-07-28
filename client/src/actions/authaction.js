import {SET_CURRENT_USER , GET_ERRORS } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthtoken';
import jwt_decode from 'jwt-decode';



export const registerUser = (userData, history) => dispatch => {

      axios
          .post('api/users/register', userData)
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