import { commonVariables } from '../../styles/commonVariables'

const styles = () => {
  return ( 
    {
      timerButton: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '10px 20px',
        alignItems: 'center',
        justifyContent: 'center',
        alignText: 'center',
        borderRadius: '5px',
        border: 'none',
        boxShadow: '2px 2px 5px rgba(200, 200, 200, 0.8)',
        color: commonVariables.colors.black,
        fontFamily: commonVariables.fonts.montserrat,
        fontSize: '1.5rem',
        cursor: 'pointer'
      },
      randomizeButton: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '10px 20px',
        alignItems: 'center',
        justifyContent: 'center',
        alignText: 'center',
        borderRadius: '5px',
        border: 'none',
        boxShadow: '2px 2px 5px rgba(200, 200, 200, 0.8)',
        color: commonVariables.colors.black,
        fontFamily: commonVariables.fonts.montserrat,
        fontSize: '1rem',
        cursor: 'pointer'
      },
      startButton: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '10px 20px',
        alignItems: 'center',
        justifyContent: 'center',
        alignText: 'center',
        borderRadius: '5px',
        border: 'none',
        boxShadow: '2px 2px 5px rgba(200, 200, 200, 0.8)',
        backgroundColor: commonVariables.colors.black,
        color: commonVariables.colors.white,
        fontFamily: commonVariables.fonts.montserrat,
        fontSize: '2rem',
        cursor: 'pointer'
      },
    }
  )
}

export default styles