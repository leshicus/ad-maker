import background from '../assets/images/background.png'
import styled from '@emotion/styled'
import { Flex, Text } from './ui'
import picsart from '../assets/images/picsArt.png'
import { ReactComponent as Product } from '../icons/sewing-machine.svg'
import { ReactComponent as Service } from '../icons/computer.svg'
import { TAGS } from './../constants'

export const FirstScreen = ({ state, dispatch, questionsNumber }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <img
        src={picsart}
        alt=""
        style={{ position: 'absolute', top: 30, left: 90 }}
      />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          height: '100%',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '60%',
          margin: 'auto',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            zIndex: 1,
            color: 'white',
          }}
        >
          <div
            style={{
              fontSize: 44,
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 20,
              lineHeight: '24px',
            }}
          >
            Help us create the best ad for you
          </div>
          <div
            style={{
              fontSize: 19,
              display: 'flex',
              justifyContent: 'center',
              lineHeight: '24px',
            }}
          >
            Please take some time and answer these two questions to help
          </div>
          <div
            style={{
              fontSize: 19,
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 40,
              lineHeight: '24px',
            }}
          >
            us generate the best ad.
          </div>
        </div>
        <Modal
          title={
            questionsNumber === 0
              ? 'What are you promoting?'
              : 'The goal of the promotion?'
          }
        >
          {() => {
            if (questionsNumber === 0) {
              return <Questions1 dispatch={dispatch} />
            }
            if (questionsNumber === 1) {
              return <Questions2 dispatch={dispatch} />
            }
          }}
        </Modal>
      </div>
    </div>
  )
}

const ModalContainer = styled.div`
  // position: absolute;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.19);
  border-radius: 16px;
  background: #f8f8fb;
  z-index: 1;
  padding: 32px 32px 0 32px;
  overflow: hidden;
  // top: 30%;
  // left: 20%;
  // right: 20%;
  height: 300px;
`
export const Modal = ({ onClose, title, children }) => (
  <ModalContainer>
    <Flex align="center" justify="space-between">
      <Text fs="18px">{title}</Text>
    </Flex>
    {children({ onClose })}
  </ModalContainer>
)

const Card = ({ icon, text, handleClick }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'white',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      padding: 18,
      justifyContent: 'space-between',
      fontWeight: 'bold',
    }}
    onClick={handleClick}
  >
    {icon}
    {text}
  </div>
)

const Questions1 = ({ dispatch }) => {
  return (
    <div
      style={{
        display: 'grid',
        columnGap: 16,
        gridAutoFlow: 'column',
        height: 140,
        marginTop: 40,
      }}
    >
      <Card
        icon={<Product />}
        text="Product"
        handleClick={() =>
          dispatch({ type: 'saveQuestions', payload: { '0': '0' } })
        }
      />
      <Card
        icon={<Service />}
        text="Service"
        handleClick={() =>
          dispatch({ type: 'saveQuestions', payload: { '0': '1' } })
        }
      />
    </div>
  )
}

const Questions2 = ({ dispatch }) => {
  return (
    <div
      style={{
        display: 'grid',
        columnGap: 16,
        gridAutoFlow: 'column',
        height: 140,
        marginTop: 40,
      }}
    >
      {Object.values(TAGS).map((item, i) => (
        <Card
          key={i}
          icon={null}
          text={item.name}
          handleClick={() =>
            dispatch({ type: 'saveQuestions', payload: { '1': String(i) } })
          }
        />
      ))}
    </div>
  )
}
