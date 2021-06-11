import './index.css'
import { LeftLogo } from './components/LeftLogo'
import { Main } from './components/Main'
import { useReducer } from 'react'
import reducer from './reducer'
import { FirstScreen } from './components/FirstScreen'

export const ColorPalette = {
  graphic: 'Graphic',
  fun: 'Fun',
  seventies: "70's"
}
export const Duration = [15, 30, 60]
export const Audio = {
  dmx: {
    title: 'DMX - Lord give me a sign.mp3',
    id: 'dmx'
  },
  slon: { title: 'у слона 2 пениса .mp3', id: 'slon' },
  nbn: { title: 'naughty by nature - O.P.P.mp3', id: 'nbn' }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    content: {},
    text: {},
    questions: {},
    theme: {
      duration: Duration[0],
      audio: Audio.dmx,
      style: ColorPalette.fun,
      colorPalette: ColorPalette.fun,
    }
  })


  const length = Object.keys(state.questions).length

  return (
    <>
      {length >= 2 && (
        <div style={{ height: '100%', display: 'flex' }}>
          <LeftLogo />
          <Main state={state} dispatch={dispatch} />
        </div>
      )}

      {length < 2 && (
        <FirstScreen
          state={state}
          dispatch={dispatch}
          questionsNumber={length}
        />
      )}
    </>
  )
}

export default App
