import * as Types from '../Action Types';
import axios from 'axios';

export const setUsers = (data) => {
  return {
    type: Types.GET_USERS,
    data,
  };
};

export const getUsers = () => {};
