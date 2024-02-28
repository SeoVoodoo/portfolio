import { styled } from "styled-components"

const Header = styled.header` 
    position: relative;
    background-image: ${({theme}) => theme.bgImage};
    background-repeat: no-repeat;
    background-position: 0 0; 
    opacity: 0.9;
    padding: 33px 43px 0 35px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99999;

    @media ${({theme}) => theme.media.tablet} {
        background-image: none;
        background-color: ${({theme}) => theme.bg};
        padding: 0 25px 0 0; 
          
    }       
`
const Wrap = styled.div`
    max-width: 100%;
    margin-left: auto;    
`

export const S = {
    Header,
    Wrap
}