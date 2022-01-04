import * as Actions from '../Action Types';

export function getUsers(state, action = '') {
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
