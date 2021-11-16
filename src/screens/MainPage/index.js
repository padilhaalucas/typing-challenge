import React, { useCallback, useEffect, useState } from 'react'
import { useStyles } from 'react-styles-hook'
import { Swal } from 'sweetalert2'

import { AbstractButton } from '../../components/Buttons'

import { useScoreActions, useScore } from '../../hooks/score'
import { useTimerActions, useTimer } from '../../hooks/timer'
import { useAlertActions } from '../../hooks/alert'
import { useResponsive } from '../../hooks/responsive'

import texts from '../../utils/randomTexts'

import styles from './styles'

const SinglePage = () => {
  
  const compStyle = useStyles(styles())

  const { currentScore } = useScore()
  const { currentTimer, currentDuration } = useTimer()

  const [textToPresent, setTextToPresent] = useState(texts[0])
  const [isTextBoxDisabled, setIsTextBoxDisabled] = useState(true)
  const [stopGame, setStopGame] = useState(false)

  const [typedWordsArr, setTypedWordsArr] = useState([])
  
  const arrayOfWords = textToPresent?.split(' ')
  
  const { changeScore } = useScoreActions()
  const { changeTimer } = useTimerActions()
  const { showConfirmationAlert, showCustomTimerAlert } = useAlertActions()
  const { isDesktopOrLaptop } = useResponsive()

  const startCountdownTimer = useCallback((duration) => {
    let display
  
    let timer = duration, minutes, seconds
    
    setIsTextBoxDisabled(false)

    const myInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? `0${minutes}` : minutes
      seconds = seconds < 10 ? `0${seconds}` : seconds

      display = `${minutes}:${seconds}`

      if (--timer < 0) {
        timer = duration
      }

      changeTimer({ current: display })

      if (display === '00:00') {
        clearInterval(myInterval)
        setStopGame(true)

        showConfirmationAlert({
          position: 'top-end',
          icon: 'success',
          title: 'Your time is over!',
          showConfirmButton: false,
          timer: 2000
        })
      }
    }, 1000)


  }, [currentTimer])

  const processCurrentText = useCallback((val) => {
    val.preventDefault()
 
    let currentInput = val.target.value
    let currentInputArr = currentInput?.split(' ')

    setTypedWordsArr(currentInputArr)
  }, [currentTimer])

  function checkPontuation(a, b) {
    let common = []

    const bIsBiggerThanA = a.length < b.length
    const size = bIsBiggerThanA ? a.length : b.length

    for (let i = 0; i < size; i++) {
      if (a[i] === b[i]) {
        common.push(a[i])
      }
    }

    changeScore(common.length)
  }

  useEffect(() => {
    if (stopGame) {
      checkPontuation(arrayOfWords, typedWordsArr)
    }
  }, [stopGame])

  const timerButtons = [
    { text: '1 min',
      onClick: () => {
        changeTimer({
          current: '01:00',
          duration: 10
        })
      }
    },
    { text: '2 min',
      onClick: () => {
        changeTimer({
          current: '02:00',
          duration: 120
        })
      }
    },
    { text: '5 min',
      onClick: () => {
        changeTimer({
          current: '05:00',
          duration: 300
        })
      }
    },
    { text: 'custom',
      onClick: () => showCustomTimerAlert()
    },
  ]

  const renderContent = useCallback(() => (
    isDesktopOrLaptop ?
    <div style={compStyle.mainContainer}>
      <div style={compStyle.eachSide}>
        <div style={compStyle.currentTextContainer}>
          <div style={{...compStyle.row, justifyContent: 'space-between', marginBottom: '2rem'}}>
            <h1 style={compStyle.currentTextTitle}>Your current text:</h1>
            <AbstractButton
              width={'10rem'}
              height={'2.5rem'}
              text={'Randomize it!'}
              onClick={() => 
                setTextToPresent(texts[Math.floor(Math.random() * texts.length)])
              }
              type={'randomize'}
            />
          </div>
          <p style={compStyle.currentText}>{textToPresent}</p>
        </div>

        <div style={{ ...compStyle.row, justifyContent: 'space-around' }}>
          {
            timerButtons.map(button => (
              <AbstractButton
                width={'8rem'}
                height={'3rem'}
                text={button.text}
                onClick={button.onClick}
                type={'timer'}
              />
            ))
          }

        </div>
        <AbstractButton
          width={'32rem'}
          height={'4rem'}
          text={'CLICK TO START'}
          onClick={() => {
            document.getElementById('typingBox').value = ''
            startCountdownTimer(currentDuration)
          }}
          type={'start'}
        />
      </div>

      <div style={compStyle.verticalLine}/>
      
      <div style={compStyle.eachSide}>
        <div id={'typingBoxDiv'} style={compStyle.textBoxContainer}>
          <label for="typingBox" style={compStyle.textBoxLabel}>Type here:</label>

          <textarea 
            id="typingBox"
            name="typingBox"
            rows="50"
            cols="50"
            wrap={true}
            style={compStyle.textBox}
            disabled={isTextBoxDisabled}
            onInput={(val) => processCurrentText(val)}
          />
        </div>
        <div style={compStyle.column}>
          <h1 style={compStyle.timerText}>TIMER: {currentTimer}</h1>
          <h1 style={compStyle.scoreText}>SCORE: {currentScore}</h1>
        </div>
      </div>
    </div>
    :
    <div style={compStyle.responsiveTipContainer}>
      <h1 style={compStyle.responsiveTipText}>You should be in a desktop or laptop to do your test!</h1>
    </div>
    // eslint-disable-next-line
  ), [textToPresent, currentTimer, currentDuration, currentScore, isDesktopOrLaptop])

  return renderContent()  
}

export default SinglePage