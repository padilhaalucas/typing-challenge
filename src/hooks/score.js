import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as duckTimerAndScore from '../store/reducers/timerAndScore.duck'

export const useScoreActions = () => {
  const dispatch = useDispatch()

  const actions = useMemo(
    () => bindActionCreators(
      {
        changeScore: duckTimerAndScore.changeScore,
      },
      dispatch
    ), [dispatch]
  )

  const changeScore = useCallback((points) => {
    actions.changeScore(points)
  }, [actions])

  return { changeScore }
}

export const useScore = () => {
  const currentScore = useSelector((state) => state.score?.current)

  return { currentScore }
}