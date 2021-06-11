import styled from '@emotion/styled'

export const Text = styled.p`
  font-family: 'Gilroy';
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight || '1.2em'};
  font-size: ${(props) => props.fs || '24px'};
  text-align: ${(props) => props.align || 'left'};
  margin: 0;
`
export const Block = styled.div`
    display: ${props => props.inline ? 'inline-block' : 'block'};
    padding:${props => props.padding};
    margin:${props => props.margin};
    width:${props => props.width};
    position: ${props => props.position};
`

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  flex-grow: ${props => props.grow};
  flex-direction: ${(props) => props.direction || 'row'};
  width: ${(props) => props.width || 'auto'};
  flex-wrap:${(props) => props.wrap};
`

export const ButtonContainer = styled.button`
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
`
