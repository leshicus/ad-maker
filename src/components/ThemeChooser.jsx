import { Text, Block, ButtonContainer, Flex } from "./ui"
import { useState, useRef, useEffect } from "react"
import { ReactComponent as ArrowDown } from '../icons/arrow-down.svg'
import styled from '@emotion/styled'
import { ReactComponent as ArrowUp } from '../icons/arrow-up.svg'
import { ColorPalette, Duration, Audio } from "../App"
import Fun from '../assets/images/Fun.png'
import dmx from '../assets/images/DMX.png'
import { useClickAway } from 'react-use';



const Colors = {
    Fun
}
const AudioImage = {
    dmx,
}
const DropDownContainer = styled.div`
height: 68px;
width: 100%;
display: flex;
padding: 22px 24px;
justify-content: space-between;
background: #F7F7FB;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
border-radius: 16px;
`
const DropdownListContainer = styled.div`
    width: 100%;
    height: 144px;
    border-radius: 16px;
    position: absolute;
    left:0;
    z-index:10;
    top:78px;
    background: #fff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    overflow-y: scroll;
    
`
const DropDown = ({ value, children, src }) => {
    const [open, setIsOpen] = useState()
    const ref = useRef(null);
    useClickAway(ref, () => {
        open && setIsOpen(false)
    });
    useEffect(() => {
        setIsOpen(false)
    }, [value])
    return (
        <Block ref={ref} position="relative" width='100%'>
            <DropDownContainer>
                <Flex align="center">
                    {src && <img src={src} alt="" style={{ marginRight: '12px', width: 36, height: 36 }} />}
                    <Text fs="14px">
                        {value}
                    </Text>
                </Flex>
                <ButtonContainer onClick={() => setIsOpen(!open)}>
                    {open ? <ArrowUp /> : <ArrowDown />}
                </ButtonContainer>
            </DropDownContainer>
            {
                open && <DropdownListContainer>
                    {
                        children
                    }
                </DropdownListContainer>
            }
        </Block>
    )
}
function useHover() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);
                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );
    return [ref, value];
}

const ItemStyled = styled.div`
    display: flex;
    background: ${props => props.isHovered ? '#F7F7FB' : '#FFFF'};
    padding: 0 12px;
    align-items: center;
    height: 48px;
    cursor:pointer;
`
const Item = ({ children, onClickHandler }) => {
    const [hoverRef, isHovered] = useHover();

    return <ItemStyled ref={hoverRef} isHovered={isHovered} onClick={() => onClickHandler()}>
        <Flex align="center">
            {children}
        </Flex>
    </ItemStyled>
}
export const ThemeChooser = ({ theme, changeTheme }) => {
    return (
        <Flex>
            <Block width='50%'>


                <Flex grow={1} shrink={1} direction="column">
                    <Block margin=" 0 0 12px 0">
                        <Text fs="14px">
                            Choose style
                        </Text>
                    </Block>
                    <DropDown value={theme.style} src={Colors[theme.style]}>
                        {
                            Object.values(ColorPalette).map(val =>
                                <Item onClickHandler={() => changeTheme('style', val)}>
                                    <Text fs="14px">{val}</Text>
                                </Item>

                            )
                        }
                    </DropDown>
                    <Block margin=" 10px" />
                    <Block margin=" 0 0 12px 0">
                        <Text fs="14px">
                            Choose duration
                        </Text>
                    </Block>
                    <DropDown value={`${theme.duration}${' '}sec`}>
                        {
                            Duration.map(val =>
                                <Item key={val} onClickHandler={() => changeTheme('duration', val)}>
                                    <Text fs="14px">{val}{' '}sec</Text>
                                </Item>

                            )
                        }
                    </DropDown>
                </Flex>
            </Block>
            <Flex grow={1} shrink={1} direction="column">
                <Block margin=" 0 0 12px 0">
                    <Text fs="14px">
                        Choose color palette
                    </Text>
                </Block>

                <DropDown value={theme.colorPalette} src={Colors[theme.colorPalette]}>
                    {
                        Object.values(ColorPalette).map(val =>
                            <Item onClickHandler={() => changeTheme('colorPalette', val)}>
                                <Text fs="14px">{val}</Text>
                            </Item>

                        )
                    }
                </DropDown>
                <Block margin=" 10px" />
                <Block margin=" 0 0 12px 0">
                    <Text fs="14px">
                        Choose audio
                    </Text>
                </Block>
                <DropDown value={theme.audio.title} src={AudioImage[theme.audio.id]}>
                    {
                        Object.values(Audio).map(val =>
                            <Item onClickHandler={() => changeTheme('audio', val.id)}>

                                <Text fs="14px">{Audio[val.id].title}</Text>
                            </Item>

                        )
                    }
                </DropDown>
            </Flex>
        </Flex>
    )
}