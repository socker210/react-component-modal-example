import { Theme } from '@emotion/react'

const defaultTheme: Theme = {
  transition: {
    duration: {
      shortest: 225,
      shorter: 250,
      short: 275,
      standard: 300,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    },
  },
}

export default defaultTheme
