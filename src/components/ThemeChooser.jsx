import { Text, Block, ButtonContainer, Flex } from "./ui"
import { useState, useRef, useEffect } from "react"
import { ReactComponent as ArrowDown } from '../icons/arrow-down.svg'
import styled from '@emotion/styled'
import { ReactComponent as ArrowUp } from '../icons/arrow-up.svg'
import { ColorPalette, Duration, Audio } from "./Main"

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
const DropDown = ({ value, children }) => {
    const [open, setIsOpen] = useState()
    useEffect(() => {
        setIsOpen(false)
    }, [value])
    return (
        <Block position="relative" width='100%'>
            <DropDownContainer>
                <Text fs="14px">
                    {value}
                </Text>
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
        <Flex>
            {children}
        </Flex>
    </ItemStyled>
}
export const ThemeChooser = ({ theme, changeTheme }) => {
    return (
        <Flex>
            <Flex grow={1} direction="column">
                <Block margin=" 0 0 12px 0">
                    <Text fs="14px">
                        Choose style
                    </Text>
                </Block>
                <DropDown value={theme.style}>
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
            <Flex grow={1} direction="column">
                <Block margin=" 0 0 12px 0">
                    <Text fs="14px">
                        Choose color palette
                    </Text>
                </Block>
                <DropDown value={theme.colorPalette}>
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
                <DropDown value={theme.audio}>
                    {
                        Object.values(Audio).map(val =>
                            <Item onClickHandler={() => changeTheme('audio', val)}>
                                <Text fs="14px">{val}</Text>
                            </Item>

                        )
                    }
                </DropDown>
            </Flex>
        </Flex>
    )
}