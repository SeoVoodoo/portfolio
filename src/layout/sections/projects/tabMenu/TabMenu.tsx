import { styled } from "styled-components";




export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((ancor : string, index : number) => {

                    return <ListItem key={index}>
                            <TabBtn>{ancor}</TabBtn>
                        </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
}

const StyledTabMenu = styled.nav`   
    ul {
        display: flex;
        justify-content: space-around;
    }
`

const ListItem = styled.li`
    
`

const TabBtn = styled.button`
    color: ${({theme}) => theme.colors.tabs.color};
    font-size: 20px;
    line-height: 136%;
    padding: 8px 55px;
    border-radius: 67px;
    border: 3px solid ${({theme}) => theme.colors.tabs.border};
    background-color: ${({theme}) => theme.colors.tabs.bgColor};  
    cursor: pointer; 
    
    &:hover {
        color: #FFFFFF;
        border: 3px solid ${({theme}) => theme.colors.tabs.borderHover};
        background-color: ${({theme}) => theme.colors.tabs.bgColorHover};
    }
`
