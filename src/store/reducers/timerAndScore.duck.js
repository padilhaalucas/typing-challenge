import { createReducer } from '@reduxjs/toolkit'

// actionTypes.js Section
const CHANGE_TIMER = 'CHANGE_TIMER'
const CHANGE_SCORE = 'CHANGE_SCORE'

const initialState = {
  timer: { current: '00:00', duration: 0 },
  score: { current: 0 },
}

// reducer.js Section
const auxReducer = createReducer(initialState, {
  [CHANGE_TIMER]: (state, action) => {
    state.current = action?.payload.current
    state.duration = action?.payload.duration
  },
  [CHANGE_SCORE]: (state, action) => {
    state.current = action?.payload
  },
})

export default function timeAndScoreReducer(state = initialState, action = {}) {
  return {
    timer: auxReducer(state.timer, action),
    score: auxReducer(state.score, action)
  }
}

// actions.js Section
export const changeTimer = ({ current, duration }) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_TIMER,
      payload: { current, duration }
    })
  }
}

export const changeScore = (points) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SCORE,
      payload: points,
    })
  }
}
