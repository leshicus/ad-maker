import { useCallback, useState } from 'react'
import { Button } from './Button'
import { STEP_PREV, STEP_CURRENT, STEP_NEXT } from './../constants'
import { StepLine } from './StepLine'

export const Stepper = ({ children, steps }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const handlePrev = useCallback(() => {
    currentStep && setCurrentStep(currentStep - 1)
  }, [currentStep])

  const handleNext = useCallback(() => {
    currentStep < steps.length - 1 && setCurrentStep(currentStep + 1)
  }, [currentStep, steps])

  return (
    <div style={{ height: '100%', padding: '112px 50px 50px 50px' }}>
      <div
        style={{
          display: 'grid',
          columnGap: 8,
          gridAutoFlow: 'column',
        }}
      >
        {steps.map((item, i) => {
          return (
            <>
              {i === currentStep && (
                <StepLine text={item} variant={STEP_CURRENT} />
              )}
              {i < currentStep && <StepLine text={item} variant={STEP_PREV} />}
              {i > currentStep && <StepLine text={item} variant={STEP_NEXT} />}
            </>
          )
        })}
      </div>

      {children !== undefined && children(currentStep)}
      <div
        style={{
          margin: 'auto',
          marginTop: 24,
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {currentStep > 0 && <Button handler={handlePrev}>Back</Button>}
        {currentStep < steps.length - 1 && (
          <div style={{ position: 'absolute', right: 0 }}>
            <Button handler={handleNext}>Next</Button>
          </div>
        )}
      </div>
    </div>
  )
}
