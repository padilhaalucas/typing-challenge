import React, { useMemo } from 'react'
import { useStyles } from 'react-styles-hook'

import styles from './styles'

const AbstractButton = (props) => {
  const style = useStyles(styles())

  const { width, height, text, onClick, type } = props

  const currentStyle = (
    type === 'timer' && {...style.timerButton} || 
    type === 'randomize' && {...style.randomizeButton} || 
    type === 'start' && {...style.startButton}
  )

  return (
    <button 
      onClick={onClick}
      style={{ ...currentStyle, width, height }}
    >
      {text}
    </button>
  )
}

export { AbstractButton }