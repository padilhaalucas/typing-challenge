import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as duckScore from '../store/reducers/score.duck'

export const useScoreActions = () => {
  const dispatch = useDispatch()

  const actions = useMemo(
    () => bindActionCreators(
      {
        changeScore: duckScore.changeScore,
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