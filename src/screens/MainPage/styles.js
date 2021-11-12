const styles = () => {
  
  return ( 
    {
      mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      },
      eachSide: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        height: 'inherit',
      },
      timerAndScore: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        height: '5rem',
      },
      verticalLine: {
        height: '80vh',
        backgroundColor: 'black',
        width: '.275em'
      },
    }
  )
}

export default styles