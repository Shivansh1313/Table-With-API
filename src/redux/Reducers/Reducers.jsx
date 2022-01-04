import * as Actions from '../ActionTypes';
import { initialState } from '../InitialState';
export function getUsers(state = initialState?.getUserState, action = '') {
  switch (action.type) {
    case Actions.GET_USERS:
      return {
        ...state,
        tableData: action.data,
      };
    default:
      return state;
  }
}
