import React, { useCallback, useMemo, useEffect } from 'react'
import { useStyles } from 'react-styles-hook'

import styles from './styles'

const TextBox = () => {
  const compStyle = useStyles(styles())

  // const { isDesktopOrLaptop, isTablet, isMobile } = useResponsive()

  const renderContent = useCallback(() => (
    <div style={compStyle.mainContainer}>
      <h1>TESTE</h1>
    </div>
    // eslint-disable-next-line
  ), [])

  return renderContent()  
}

export default TextBox