import { styled } from "styled-components"
import { font } from "../../../styles/Common"


// Skills

const Skills = styled.section`
    background-image: ${({theme}) => theme.bgImage};
    background-repeat: no-repeat;
    background-position: 0 0;    

    @media ${({theme}) => theme.media.tablet} {        
        background-image: none;
        background-color: ${({theme}) => theme.bg};
        padding-top: 65px !important;
    }    
`

const WrapSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 161px);    
    gap: 12px;
    justify-content: center;    
    justify-items: center;

    @media ${({theme}) => theme.media.tablet} {
        grid-template-columns: repeat(2, minmax(150px, 271px));
        row-gap: 75px;
        column-gap: 22px;
    }

    @media screen and (max-width: 480px) {
        row-gap: 40px;
        column-gap: 12px;
    }
`


// Skill

const Skill = styled.div`
    width: 161px;
    height: 91px;
    border-radius: 24px;
    background: ${({theme}) => theme.bgElement};
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
    text-align: center;

    
    span {
        display: inline-block;
        color: white;        
    }    

    @media screen and (min-width: 481px) and (max-width: 768px) {
        max-width: 271px;
        width: 100%;
        height: 153px;
        
        border-radius: 40px; 
        
        ${font({Fmax: 32, Fmin: 18})}
    }
    
`

const WrapIcon = styled.div`
    width: 70px;
    height: 70px;
    margin: -30px auto 10px;        
    border-radius: 50%;
    border: 10px solid ${({theme}) => theme.bg};
    overflow: hidden;
    background-color: #000B1D;

    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 108px;
        height: 108px;
        border: 16px solid ${({theme}) => theme.bg};             
    }
`

export const S = {
    Skills,
    WrapSkills,
    Skill,
    WrapIcon
}