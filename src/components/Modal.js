import styled from '@emotion/styled'
import { Flex, Text, ButtonContainer } from "./ui"
import { ReactComponent as Close } from '../icons/close.svg'

const ModalContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 488px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.19);
    border-radius: 16px;
    background: #fff;
    z-index: 10;
    padding: 32px 32px 0 32px;
    overflow: hidden;
`
export const Modal = ({ onClose, title, children }) =>
    <ModalContainer>
        <Flex align="center" justify="space-between">
            <Text fs="18px">
                {title}
            </Text>
            <ButtonContainer onClick={() => onClose()} >
                <Close />
            </ButtonContainer>
        </Flex>
        {children({ onClose })}
    </ModalContainer>