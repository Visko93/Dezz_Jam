export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, { ...action.music }]
    default:
      return state
  }
}
