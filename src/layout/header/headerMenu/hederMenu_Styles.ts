import { Link } from "react-scroll"
import { css, styled } from "styled-components"


// Menu

const MenuItem = styled.li`
    position: relative;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;    
    transition: ${({theme}) => theme.animations.transition};
    
    
    color: ${({theme}) => theme.colors.link};
    /* outline: 1px solid red; */

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const NavLink = styled(Link)`    
    color: transparent;
    font-size: 25px;
    cursor: pointer;

    &::before {        
        content: "";
        display: inline-block;
        background-color: #2157F2;
        height: 2px;

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
        transition: ${({theme}) => theme.animations.transition};
    }

    &:hover, &.active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);    
            } 
        }
    }
`





// Mobile Menu

const MobileMenu = styled.nav`
       
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${({theme}) => theme.bg};
    /* opacity: 0.9; */    
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);    
    transition: transform .8s ease-in-out;    
    
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        transition: gap .5s ease-in-out; 
    }

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);

        ul {
            gap: 35px;
        }
    `};
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 45px;
    height: 45px;
    top: 10px;
    left: calc(50% - 22.5px);
    z-index: 9999999;
    cursor: pointer;

span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.link};
    position: absolute;    

    ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);    
    `}

    &::before{
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${({theme}) => theme.colors.link};
        transform: translateY(-10px);
        position: absolute;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);   
        `}

    }
    &::after{
        content: "";
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${({theme}) => theme.colors.link};
        transform: translateY(8px);
        position: absolute;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0);
            width: 36px;    
        `}
    }
}
`

//Desktop Menu

const DesktopMenu = styled.nav`
    display: inline-block;
    vertical-align: middle;
    ul {
        display: flex;
        gap: 30px;
        font-size: 25px

    }    
`

export const S = {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}