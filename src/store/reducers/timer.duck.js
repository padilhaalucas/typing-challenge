import { createReducer } from '@reduxjs/toolkit'

// actionTypes.js Section
const CHANGE_TIMER = 'CHANGE_TIMER'

const initialState = { current: '00:00', duration: 0 }

// reducer.js Section
const auxReducer = createReducer(initialState, {
  [CHANGE_TIMER]: (state, action) => {
    state.current = action?.payload.current
    state.duration = action?.payload.duration
  },
})

export default function timerReducer(state = initialState, action = {}) {
  return auxReducer(state.timer, action)
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
