import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as duckTimerAndScore from '../store/reducers/timerAndScore.duck'

export const useTimerActions = () => {
  const dispatch = useDispatch()

  const actions = useMemo(
    () => bindActionCreators(
      {
        changeTimer: duckTimerAndScore.changeTimer,
      },
      dispatch
    ), [dispatch]
  )

  const changeTimer = useCallback(({ current, duration }) => {
    actions.changeTimer({ current, duration })
  }, [actions])

  return { changeTimer }
}

export const useTimer = () => {
  const currentTimer = useSelector((state) => state.timer?.current)
  const currentDuration = useSelector((state) => state.timer?.duration)

  return { currentTimer, currentDuration }
}