import * as Types from '../ActionTypes';
import axios from 'axios';

export const setUsers = (data) => {
  return {
    type: Types.GET_USERS,
    data,
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    return axios.get('https://reqres.in/api/users').then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        dispatch(setUsers(response?.data?.data));
      }
    });
  };
};
