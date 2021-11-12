import { createReducer } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

// actionTypes.js Section
const SCORE = 'SCORE'
const RESET_SCORE = 'RESET_SCORE'

const initialState = { current: 0 }

// reducer.js Section
const auxReducer = createReducer(initialState, {
  [SCORE]: (state, action) => {
    state.current = action?.payload
  },
  [RESET_SCORE]: (state, action) => {
    state.current = action?.payload
  },
})

export default function scoreReducer(state = initialState, action = {}) {
  return auxReducer(state.score, action)
}

// actions.js Section
export const changeScore = (points) => {
  return (dispatch) => {
    dispatch({
      type: SCORE,
      payload: points,
    })
  }
}

export const resetScore = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_SCORE,
      payload: 0,
    })
  }
}

// selectors.js
export const currentScore = createSelector([
  (state) => state.score.score.current,
],
  (points) => points
)

