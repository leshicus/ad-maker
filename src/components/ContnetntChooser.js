import { ReactComponent as Upload } from '../icons/upload.svg'
import { ReactComponent as ArrowDown } from '../icons/arrow-down.svg'
import { ReactComponent as Clear } from '../icons/clear.svg'
import { ReactComponent as Texture } from '../icons/texture-editor.svg'
import building from '../assets/images/building.png'
import food from '../assets/images/food.png'
import schema from '../assets/images/schema.png'
import shmot from '../assets/images/shmot.png'
import watch from '../assets/images/watch.png'
import ded from '../assets/images/ded.png'
import surf from '../assets/images/surf.png'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { MAX_CONTENT_COUNT } from '../constants'
import { Button } from './Button'
import { Text, Block, Flex, ButtonContainer } from './ui'
import { Modal } from './Modal'

const images = { building, food, schema, shmot, watch, }

const videos = {
    ded, surf
}

const UploadBtn = styled.div`
  border: 1px dashed #dcdde9;
  border-radius: 4px;
  height: 296px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ContentContainer = styled.div`
  height: 68px;
  width: 100%;
  background: #f7f7fb;
  border-radius: 16px;
  padding: 12px 24px 12px 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
const ContentImagePreview = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: #dcdde9;
  background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
`

const TypeSwitcherValueContainer = styled.div`
    position: absolute;
    z-index: 20;
    border: 1px solid #333;
    padding: 6px;
    border-radius: 4px;
    top: 48px;
    left: 0;
    width: 100%;
    background: #fff
`

const PreviewStyled = styled.div`
width: 240px;
height: 120px;
margin-bottom: 12px;
margin-right: 22px;
border-radius: 12px;
position: relative;
border: 2px solid;
border-color: ${(props) => (props.selected ? '#5A00EE' : 'transparent')};
margin-bottom: 6px;
img {
    width:100%;
    height:100%;
}
span{
    position: absolute;
top: 12px;
left: 12px;
    display: flex;
    border-radius: 50%;
    height: 24px;
    width:24px;
    background: #5A00EE;
    margin:auto;
}
div{

}
`
const SelectedPreview = styled.img`
    width: 100px;
    height: 56px;
    border-radius: 12px;
    overflow:hidden;
    padding-right: 6px;
`


const Preview = ({ src, selected, onClickHandler }) => <PreviewStyled selected={selected} onClick={() => onClickHandler()}>
    <div />
    {selected && <span />}
    <img src={src} alt="#" />

</PreviewStyled>




const TypeSwitcher = ({ onChangeHandler, type }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = (value) => {
        onChangeHandler(value)
        setIsOpen(false)
    }
    return <Block padding={'16px'} position="relative" inline>
        <Flex align="center" justify="center">
            <Block padding="0 12px 0 0 ">
                <Text fs="14px">{type}</Text>
            </Block>
            <ButtonContainer onClick={() => setIsOpen(!isOpen)}>
                <ArrowDown />
            </ButtonContainer>
        </Flex>
        {isOpen && <TypeSwitcherValueContainer>
            <Flex direction="column">
                <Block padding="6px">
                    <ButtonContainer onClick={() => onClickHandler('Videos')}>

                        <Text fs="14px">Videos</Text>
                    </ButtonContainer>
                </Block>
                <Block padding="6px">
                    <ButtonContainer onClick={() => onClickHandler('Images')}>

                        <Text fs="14px">Images</Text>
                    </ButtonContainer>
                </Block>
            </Flex>
        </TypeSwitcherValueContainer>
        }
    </Block>

}

export const Content = ({ setContent, content, closeHandler }) => {
    const [type, setType] = useState('Videos')
    const [selected, setSelected] = useState({})
    useEffect(() => {
        setSelected(content)
        // eslint-disable-next-line
    }, [])
    const selectItemHandler = (key) => {
        if (selected[key]) {
            const { [key]: del, ...rest } = selected
            setSelected(rest)
        } else {
            if (Object.keys(selected).length === MAX_CONTENT_COUNT) {
                return
            }
            const src = type === 'Videos' ? videos[key] : images[key]
            setSelected({ ...selected, [key]: { src, type, preview: src } })
        }
    }

    return (
        <>
            <Flex justify="flex-end">
                <TypeSwitcher type={type} onChangeHandler={(value) => setType(value)} />
            </Flex>
            <div style={{ height: '250px', width: '100%', overflow: 'hidden', overflowY: 'scroll' }}>

                {
                    type === 'Images' && <Flex wrap='wrap'>
                        {Object.keys(images).map((key) => <Preview src={images[key]} key={key} selected={!!selected[key]} onClickHandler={() => selectItemHandler(key)} />)}
                    </Flex>
                }
                {
                    type === 'Videos' && <Flex wrap='wrap'>
                        {Object.keys(videos).map((key) => <Preview src={videos[key]} key={key} selected={!!selected[key]} onClickHandler={() => selectItemHandler(key)} />)}
                    </Flex>
                }
            </div>
            <Block margin="30px 0 0 0" padding="16px" height="88px">
                <Flex justify="space-between" align="center">
                    <Block>

                        {Object.values(selected).map(item => <SelectedPreview key={item.src} src={item.src} />)}
                    </Block>
                    <Flex align="center">
                        <Block padding='0 16px'>

                            <Text fs="14px" color="#BCC0D1">
                                {Object.keys(selected).length} of {MAX_CONTENT_COUNT}
                            </Text>
                        </Block>
                        <Button handler={() => {
                            setContent(selected)
                            closeHandler()
                        }} bg="#5A00EE" color="white">
                            Choose
                        </Button>
                    </Flex>
                </Flex>
            </Block>

        </>
    )
}
export const ContentChooser = ({ content, handleSave }) => {
    const [count, setCount] = useState(MAX_CONTENT_COUNT)
    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        setCount(MAX_CONTENT_COUNT - Object.values(content).length)
    }, [content])
    return (
        <>


            <div style={{ position: 'relative' }}>
                {isShown && <Modal title="Stock" onClose={() => setIsShown(false)}>
                    {
                        ({ onClose }) => <Content setContent={handleSave} content={content} closeHandler={onClose} />
                    }

                </Modal>}
            </div>

            <Flex>
                <Flex grow={1}>
                    <UploadBtn onClick={() => setIsShown(true)}>
                        <Flex direction="column" align="center">
                            <Upload />
                            <Text fs="12px" color={'#545869'} align="center">
                                Drag and drop here
                                <br />
                                or just click to browse stock files
                            </Text>
                        </Flex>
                    </UploadBtn>
                </Flex>
                <Flex grow={1} direction="column">
                    {Object.values(content).map((item) => (
                        <ContentContainer key={item.src} >
                            <ContentImagePreview src={item.preview} />
                            <Flex align="center">

                                {item.type === 'Images' && <ButtonContainer><Texture /></ButtonContainer>}
                                <Block padding="4px" />
                                <ButtonContainer>
                                    <Clear />
                                </ButtonContainer>
                            </Flex>
                        </ContentContainer>
                    ))}
                    {[...Array(count)].map((item) => (
                        <ContentContainer key={item}>
                            <ContentImagePreview />
                        </ContentContainer>
                    ))}
                </Flex>
            </Flex>
        </>
    )
}


