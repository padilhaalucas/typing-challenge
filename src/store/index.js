import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import timerDuckReducer from './reducers/timer.duck'
import scoreDuckReducer from './reducers/score.duck'

export const configureStore = () => {

  const reducers = combineReducers({
    timer: timerDuckReducer,
    score: scoreDuckReducer
  })

  const middleware = [thunk]

  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducers,
    enhancers(applyMiddleware(...middleware))
  )

  return store
}