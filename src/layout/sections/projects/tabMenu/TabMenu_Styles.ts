
import { css, styled } from "styled-components";

const TabMenu = styled.nav`   
    ul {        
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(159px, 1fr));


        column-gap: 40px;
        row-gap: 30px;
        margin-bottom: 60px;

        @media ${({theme}) => theme.media.mobile} {  
            grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));      
            column-gap: 25px;
            row-gap: 18px;            
        }
    }
`

const ListItem = styled.li`
        
`

const TabBtn = styled.button<{active: boolean}>`
    color: ${({theme}) => theme.colors.tabs.color};
    font-size: 20px;
    line-height: 136%;
    width: 100%;
    padding: 8px 0;
    border-radius: 67px;
    border: 3px solid ${({theme}) => theme.colors.tabs.border};
    background-color: ${({theme}) => theme.colors.tabs.bgColor};  
    cursor: pointer; 
    transition: ${({theme}) => theme.animations.transition};
    /* transition: 1s ease-in-out; */
    
    &:hover {
        color: #FFFFFF;
        border: 3px solid ${({theme}) => theme.colors.tabs.borderHover};
        background-color: ${({theme}) => theme.colors.tabs.bgColorHover};
    }

    ${props => props.active && css`
        & {
            color: #FFFFFF;
            border: 3px solid ${({theme}) => theme.colors.tabs.borderHover};
            background-color: ${({theme}) => theme.colors.tabs.bgColorHover};
        }        
    `}

    @media ${({theme}) => theme.media.mobile} {        
        font-size: 12px;
        padding: 4px 0;               
    }
`

export const S = {
    TabMenu,
    ListItem,
    TabBtn
}