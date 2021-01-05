import * as types from '../actions/actionTypes';

export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return [...state, { ...action.favorites }];
    case types.REMOVE_FAVORITE:
      return [...action.favorites];
    default:
      return state;
  }
}
