import { Stepper } from './Stepper'
import { STEPS, TAGS } from './../constants'
import { ContentChooser } from './ContnetntChooser'
import { useReducer } from 'react'
import reducer from './reducer'
import { TextChooser } from './TextChooser'

export const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    content: {},
    text: {},
    questions: {
      '0': 0,
      '1': 0,
    },

  })

  console.log('state', state)

  return (
    <div style={{ flexGrow: 1 }}>
      <Stepper steps={STEPS}>
        {(step) => {
          return (
            <>
              {step === 0 && (
                <Questions
                  value={state.questions}
                  handleSave={(value) => {
                    console.log(value)
                    dispatch({ type: 'saveQuestions', payload: value })
                  }}
                />
              )}
              {step === 1 && <ContentChooser content={state.content} handleSave={(value) => {
                dispatch({ type: 'saveContent', payload: value })
              }} />}

              {step === 2 && (
                <TextChooser
                  value={state.text}
                  handleSave={(value) => {
                    dispatch({ type: 'saveText', payload: value })
                  }}
                  tags={TAGS[state.questions['1']].children}
                />
              )}
            </>
          )
        }}
      </Stepper>
    </div>
  )
}

const Questions = ({ value, handleSave }) => {
  return (
    <div>
      <div>
        <label for="question_1">What are you promoting:</label>
        <select
          id="question_1"
          onChange={(e) => {
            handleSave({ '0': e.target.value })
          }}
          value={value[0]}
        >
          <option value="0" selected={value[0]}>
            Product
          </option>
          <option value="1" selected={value[0]}>
            Service
          </option>
        </select>
      </div>
      <div>
        <label for="question_2">The goal of the promotion:</label>
        <select
          id="question_2"
          onChange={(e) => {
            handleSave({ '1': e.target.value })
          }}
          value={value[1]}
        >
          {Object.values(TAGS).map((item, i) => (
            <option value={String(i)} selected={value[1]}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
