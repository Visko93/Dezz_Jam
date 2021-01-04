import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

// const middleware =
//   process.env.NODE_ENV !== 'production'
//     ? [require('redux-immutable-state-invariant').default(), thunk]
//     : [thunk]

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
  )
}
