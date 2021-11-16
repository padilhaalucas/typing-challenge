import Swal from 'sweetalert2'

import { useTimerActions } from './timer'

export const useAlertActions = () => {
  const { changeTimer } = useTimerActions()

  const showConfirmationAlert = ({position, icon, title, showConfirmButton, timer}) => (
    Swal.fire({
      position,
      icon,
      title,
      showConfirmButton,
      timer
    })
  )

  const showCustomTimerAlert = () => (
    Swal.fire({
      title: 'Your custom timer:',
      html: `<input type="text" id="customTimer" class="swal2-input" placeholder="Write in seconds">`,
      confirmButtonText: 'Choose!',
      focusConfirm: false,
      preConfirm: () => {
        const customTimer = Swal.getPopup().querySelector('#customTimer').value
        if (!customTimer) {
          Swal.showValidationMessage(`Please enter some time...`)
        }
        changeTimer({
          current: 'custom',
          duration: customTimer
        })
      }
    })
  )

  return { showConfirmationAlert, showCustomTimerAlert }
}