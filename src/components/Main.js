import { Stepper } from './Stepper'
import { STEPS, TAGS } from './../constants'
import { ContentChooser } from './ContnetntChooser'
import { Preview } from './Preview'
import { TextChooser } from './TextChooser'

export const Main = ({ state, dispatch }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Stepper steps={STEPS}>
        {(step) => {
          return (
            <>
              {step === 0 && (
                <ContentChooser
                  content={state.content}
                  handleSave={(value) => {
                    dispatch({ type: 'saveContent', payload: value })
                  }}
                />
              )}

              {step === 1 && (
                <TextChooser
                  value={state.text}
                  handleSave={(value) => {
                    dispatch({ type: 'saveText', payload: value })
                  }}
                  tags={TAGS[state.questions['1']].children}
                />
              )}

              {step === 3 && <Preview />}
            </>
          )
        }}
      </Stepper>
    </div>
  )
}
