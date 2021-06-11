import { Stepper } from './Stepper'
import { STEPS, TAGS } from './../constants'
import { ContentChooser } from './ContnetntChooser'
import { useReducer } from 'react'
import reducer from './reducer'
import { TextChooser } from './TextChooser'
import { ThemeChooser } from './ThemeChooser'
import { Block, Text } from './ui'
import { Preview } from './Preview'

export const ColorPalette = {
  graphic: 'Graphic',
  fun: 'Fun',
  seventies: "70's"
}
export const Duration = [15, 30, 60]
export const Audio = {
  dmx: 'DMX - Lord give me a sign.mp3',
  slon: 'у слона 2 пениса .mp3',
  nbn: 'naughty by nature - O.P.P.mp3'
}
export const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    content: {},
    text: {},
    questions: {
      '0': 0,
      '1': 0,
    },
    theme: {
      duration: Duration[0],
      audio: Audio.dmx,
      style: ColorPalette.fun,
      colorPalette: ColorPalette.graphic,
    }

  })

  console.log('state', state)
  const Titles = [
    { title: 'Add photo or video', subtitle: 'Choose color palette' },
    { title: 'Add captions', subtitle: 'Maximum 3 captions' },
    { title: 'Choose a theme' },
  ]

  return (
    <div style={{ flexGrow: 1 }}>
      <Stepper steps={STEPS}>
        {(step) => {
          return (
            <>
              <Block margin="82px 0 32px">
                <Text color={'#333'}>{Titles[step].title}</Text>
              </Block>
              <Block margin="0 0 16px">
                <Text color={'#BCC0D1'} fs={'14px'}>
                  {Titles[step].subtitle}
                </Text>
              </Block>
              {step === 0 && <ContentChooser content={state.content} handleSave={(value) => {
                dispatch({ type: 'saveContent', payload: value })
              }} />}

              {step === 1 && (
                <TextChooser
                  value={state.text}
                  handleSave={(value) => {
                    dispatch({ type: 'saveText', payload: value })
                  }}
                  tags={TAGS[state.questions['1']].children}
                />
              )}
              {step === 2 && <ThemeChooser theme={state.theme} changeTheme={(id, value) => {
                dispatch({ type: 'changeTheme', payload: { id, value } })
              }} />}
              {step === 3 && <Preview />}
            </>
          )
        }}
      </Stepper>
    </div>
  )
}


