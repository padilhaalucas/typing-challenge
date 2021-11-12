import React, { useCallback } from 'react'
import { useStyles } from 'react-styles-hook'

import styles from './styles'

const SinglePage = () => {
  const compStyle = useStyles(styles())

  // const { isDesktopOrLaptop, isTablet, isMobile } = useResponsive()

  const renderContent = useCallback(() => (
    <div style={compStyle.mainContainer}>
      <div style={compStyle.eachSide}>
        <h1>CAIXA DE TEXTO</h1>
        <h1>BOTÕES DE TEMPO</h1>
        <h1>BOTÃO START</h1>
      </div>

      <div style={compStyle.verticalLine}/>
      
      <div style={compStyle.eachSide}>
        <h1>LUGAR DE DIGITAÇÃO</h1>
        <div style={compStyle.timerAndScore}>
          <h1>TEMPO (02:00)</h1>
          <h1>SCORE ATUAL</h1>
        </div>
        <h1>PONTUAÇÃO: 10 PONTOS</h1>
      </div>
    </div>
    // eslint-disable-next-line
  ), [])

  return renderContent()  
}

export default SinglePage