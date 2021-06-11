import './index.css'
import { LeftLogo } from './components/LeftLogo'
import { Main } from './components/Main'
import { useReducer } from 'react'
import reducer from './reducer'
import { FirstScreen } from './components/FirstScreen'

function App() {
  const [state, dispatch] = useReducer(reducer, {
    content: {},
    text: {},
    questions: {},
  })

  console.log('state', state)
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
