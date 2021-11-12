import { createReducer } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

// actionTypes.js Section
const TIMER = 'TIMER'
const RESET_TIMER = 'RESET_TIMER'

const initialState = { current: 0 }

// reducer.js Section
const auxReducer = createReducer(initialState, {
  [TIMER]: (state, action) => {
    state.current = action?.payload
  },
  [RESET_TIMER]: (state, action) => {
    state.current = action?.payload
  },
})

export default function timerReducer(state = initialState, action = {}) {
  return auxReducer(state.timer, action)
}

// actions.js Section
export const changeScore = (points) => {
  return (dispatch) => {
    dispatch({
      type: TIMER,
      payload: points,
    })
  }
}

export const resetScore = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_TIMER,
      payload: 0,
    })
  }
}

// selectors.js
export const currentScore = createSelector([
  (state) => state.timer.timer.current,
],
  (points) => points
)

