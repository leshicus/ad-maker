import { Stepper } from './Stepper'
import { STEPS } from './../constants'
import { ContentChooser } from './ContnetntChooser'

export const Main = () => (
  <div style={{ flexGrow: 1 }}>
    <Stepper steps={STEPS}>
      {(step) => {
        return (<>
          {step === 0 && <ContentChooser />}
        </>)

      }}
    </Stepper>
  </div>
)
