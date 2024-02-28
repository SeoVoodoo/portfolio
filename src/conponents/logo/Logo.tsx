import sprite from "../../assets/images/sprite.png";
import { styled } from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {

    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            {/* <Icon iconId={'logo2'} width={"80"} height={"80"} viewBox={"0 0 40 40"} /> */}
            {/* <img src={logo} width={'79'} height={'79'} /> */}
            <StyledLogo>

            </StyledLogo>
        </a>
    );
}

const StyledLogo = styled.div`
    background-image: url(${sprite});
    background-position: -300px -300px;
    width: 79px;
    height: 79px; 
    cursor: pointer;
    
    @media ${({theme}) => theme.media.tablet} {
        width: 72px;
        height: 72px; 
        background-position: -450px -75px;  
    }
`