import { Stepper } from './Stepper'
import { STEPS } from './../constants'

export const Main = () => (
  <div style={{ flexGrow: 1 }}>
    <Stepper steps={STEPS}>
      {(step) => {
        /* switch case here */
        return null
      }}
    </Stepper>
  </div>
)
