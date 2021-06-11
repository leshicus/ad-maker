import { ReactComponent as Upload } from './icons/upload.svg'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { MAX_CONTENT_COUNT } from './constants'


const Text = styled.p`
font-family: 'Gilroy';
color: ${props =>
        props.color};
line-height: ${props =>
        props.lineHeight || '1.2em'};
font-size: ${props =>
        props.fs || '24px'};
text-align: ${props => props.align || 'left'};
`

const UploadBtn = styled.div`
border: 1px dashed #DCDDE9;
border-radius: 4px;
height: 296px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Flex = styled.div`
    display: flex;
    justify-content:${props =>
        props.justify || 'flex-start'};
    align-items:${props =>
        props.align || 'flex-start'};

    flex-direction:${props => props.direction || 'row'};
    width: ${props => props.width || 'auto'}
    
`
const ContentContainer = styled.div`
height: 68px;
width:100%;
background: #F7F7FB;
border-radius: 16px;
padding: 12px;
justify-content: flex-start;
margin-bottom: 8px;
`
const ContentImagePreview = styled.div`
width: 44px;
height: 44px;
border-radius: 8px;
background-color: #DCDDE9;
background-image: ${props => props.src ? `url(${props.src})` : 'none'}
`


export const ContentChooserBase = ({ content, setContent }) => {
    const [count, setCount] = useState(MAX_CONTENT_COUNT)
    useEffect(() => {
        setCount(MAX_CONTENT_COUNT - Object.values(content).length)
    }, [content])
    return <>
        <Text color={'#333'}>
            Add photo or video
        </Text>
        <Text color={'#BCC0D1'} fs={'14px'}>
            Maximum 4 media types
        </Text>
        <div
            style={{ 'min-width': '1044px' }}
        >

            <Flex
            >
                <Flex width={'50%'} >
                    <UploadBtn>
                        <Flex direction="column" align="center">
                            <Upload />
                            <Text fs='12px' color={'#545869'} align="center">
                                Drag and drop here<br />
                                or just click to browse stock files
                            </Text>
                        </Flex>
                    </UploadBtn>
                </Flex>
                <Flex width={'50%'} direction="column">
                    {Object.values(content).map(item => <ContentContainer>
                        <ContentImagePreview />
                    </ContentContainer>)}
                    {[...Array(count)].map(item => <ContentContainer>
                        <ContentImagePreview />
                    </ContentContainer>)}

                </Flex>
            </Flex>
        </div>
    </>
}



export const ContentChooser = () => {
    const [content, setContent] = useState({})
    const setContentHandler = (id, newContent) => {
        setContent({ ...content, [id]: newContent })
    }

    return <ContentChooserBase content={content} setContent={setContentHandler} />
}


