import '@emotion/react'

type Duration = {
  shortest: number
  shorter: number
  short: number
  standard: number
}

type Easing = {
  easeInOut: string
  easeIn: string
  easeOut: string
}

declare module '@emotion/react' {
  export interface Theme {
    transition: {
      duration: Duration
      easing: Easing
    }
  }
}
