import { useRef } from 'react'
import { Global } from '@emotion/react'

const App = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <Global
        styles={{
          body: {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      />
      <div>
        <button
          onClick={() => {
            if (ref.current) {
              const {
                transition,
                transitionProperty,
                transitionDelay,
                transitionDuration,
                transitionTimingFunction,
              } = ref.current.style

              console.log(transition)
              console.log(transitionProperty)
              console.log(transitionDuration)
              console.log(transitionTimingFunction)
              console.log(transitionDelay)
            }
          }}
        >
          Get style
        </button>
        <div
          ref={ref}
          style={{
            transition:
              'height 300ms ease-in-out 0ms, opacity 250ms ease 100ms',
          }}
        />
      </div>
    </>
  )
}

export default App
