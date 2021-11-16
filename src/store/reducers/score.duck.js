import { createReducer } from '@reduxjs/toolkit'

// actionTypes.js Section
const CHANGE_SCORE = 'CHANGE_SCORE'

const initialState = { current: 0 }

// reducer.js Section
const auxReducer = createReducer(initialState, {
  [CHANGE_SCORE]: (state, action) => {
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
      type: CHANGE_SCORE,
      payload: points,
    })
  }
}
