import { styled } from "styled-components"
import { StyledBtn } from "../../../conponents/Button.styled"
import { StyledLink } from "../../../conponents/Link.styled"
import { font } from "../../../styles/Common"

// About

const About = styled.section`
    background-image: ${({theme}) => theme.bgImage};
    background-repeat: no-repeat;
    background-position: 0 0;    
    padding-top: 170px !important;  
    
    @media ${({theme}) => theme.media.tablet} {
        background-position: top 70px left 0; 
    }

    @media ${({theme}) => theme.media.tablet} {
        background-image: ${({theme}) => theme.bgImageTablet};
    }
`
const WrapAboutInner = styled.div`
    position: relative;   
`

// About Inner

const AboutInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1158px;
    min-height: 500px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 0 130px 0 104px;
        
    border-radius: 200px 0;
    border: 2px solid ${({theme}) => theme.colors.border};
    background: ${({theme}) => theme.gradient};
    backdrop-filter: blur(10px);

        
    ${StyledBtn} {
        padding: 15px 35px;
        display: flex;              
        align-items: center;
        gap: 20px;
        ${font({lineHeight: 1.5, Fmax: 15, Fmin: 9})};
    }

    ${StyledLink} {
        
        ${font({lineHeight: 1.5, Fmax: 16, Fmin: 9})};
    }

    @media screen and (max-width: 1080px){
        padding-right: 91px;
        padding-left: 73px; 

        ${StyledBtn} {
            padding: 10px 20px; 
            gap: 15px;                   
        }
    }

    @media screen and (max-width: 992px){
        padding-right: 52px;
        padding-left: 41px; 
    }

    @media ${({theme}) => theme.media.tablet} {
        flex-direction: column;
        justify-items: center;
        align-items: center;
        max-width: 590px;
        padding: 30px 20px 85px 40px;
        background: ${({theme}) => theme.gradientTablet};        
    }

    @media ${({theme}) => theme.media.mobile} {
        border-radius: 112px 0;
        padding-bottom: 45px;
    }
`

const Info = styled.div`    
    margin-left: 70px;

    @media screen and (max-width: 1080px){
        margin-left: 40px;
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-left: 0; 
    }
    
`
const Text = styled.p`
    max-width: 376px;
    color: ${({theme}) => theme.colors.text};
    ${font({lineHeight: 1.5, Fmax: 20, Fmin: 12})};    
    margin-bottom: 40px;
`


// Foto

const Foto = styled.div`
    max-width: 400px;
    max-height: 400px;
    flex-shrink: 2;
    border: 25px solid #FFF;
    border-radius: 50%;    
    overflow: hidden;
    transform: rotate(-3deg);

    img {
        width: 100%;
        height: 100%;
        filter: brightness(140%);        
    }

    @media ${({theme}) => theme.media.tablet} {
        max-width: 334px;
        max-height: 334px;
    }

    @media screen and (max-width: 420px) {
        max-width: 188px;
        max-height: 188px;
        border: 14px solid #FFF;
    }
`

export const S = {
    About,
    WrapAboutInner,
    AboutInner,
    Info,
    Text,
    Foto
}