import { useMediaQuery } from 'react-responsive'

export const useResponsive = () => {

  const isDesktopOrLaptop = useMediaQuery({
    minDeviceWidth: 1024,
    maxDeviceWidth: 2048,
  })

  return {
    isDesktopOrLaptop
  }
}