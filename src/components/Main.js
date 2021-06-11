import { Stepper } from './Stepper'
import { STEPS } from './../constants'
import { ContentChooser } from './ContnetntChooser'
import { useEffect, useReducer } from 'react'
import reducer from './reducer'
import { TextChooser } from './TextChooser'

export const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    text: 0,
    content: {}
  })

  useEffect(() => {
    console.log('state', state.text)
  }, [state.text])

  return (
    <div style={{ flexGrow: 1 }}>
      <Stepper steps={STEPS}>
        {(step) => {
          return (
            <>
              {step === 0 && <ContentChooser content={state.content} handleSave={(value) => {
                dispatch({ type: 'saveContent', payload: value })
              }} />}
              {step === 1 && (
                <TextChooser
                  value={state.text}
                  handleSave={(value) => {
                    console.log(value)
                    dispatch({ type: 'saveText', payload: value })
                  }}
                />
              )}
            </>
          )
        }}
      </Stepper>
    </div>
  )
}
