import * as types from './actionTypes';

export function addFavorite(favorites) {
  return { type: types.ADD_FAVORITE, favorites };
}

export function removeFavorite(favorites) {
  return { type: types.REMOVE_FAVORITE, favorites };
}
