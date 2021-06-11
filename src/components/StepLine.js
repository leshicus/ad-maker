import { STEP_PREV, STEP_CURRENT, STEP_NEXT } from './../constants'

export const StepLine = ({ text, variant }) => {
  let color = 0

  if (variant === STEP_PREV) {
    color = '#5A00EE'
  } else if (variant === STEP_CURRENT) {
    color = 'black'
  } else if (variant === STEP_NEXT) {
    color = '#DCDDE9'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>{text}</div>
      <div
        style={{
          border: '1px solid white',
          height: 4,
          background: color,
          marginTop: 8,
        }}
      ></div>
    </div>
  )
}
