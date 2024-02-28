import { styled } from "styled-components";
import mapBgn from '../../../assets/images/map.webp';
//import  avtor  from "../../../assets/images/photo-big.webp";
import  autor  from "../../../assets/images/autor.webp";
import h2Decor from "../../../assets/images/h2_decoration.svg";

const LocationMap = styled.section`
    background-color: #A6BCFA;
    background-image: url(${autor}), url(${mapBgn});
    background-position: right -205px bottom 0, left 42px top 68px;
    background-repeat: no-repeat;
    width: 100%;
    
    height: 100vh;
    
    position: relative;

    
    @media ${({theme}) => theme.media.tablet} {
        background-position: right 0 bottom 0, left 3vw bottom 8vh;
        background-size: 60% auto, 55% auto;
    }

    @media ${({theme}) => theme.media.mobile} {
        height: 668px;    
    }
`

const AboutBox = styled.div`
    position: absolute;
    left: 115px;
    bottom: 40px; 
    
    max-width: 562px; 
    height: 490px;   
    padding: 30px 24px 65px 59px;
    border-radius: 100px 0px;
    border: 2px solid #FFF;
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
    backdrop-filter: blur(10px);

    
    @media ${({theme}) => theme.media.tablet} {
        top: 70px;
        left: 0;
        right: 0;
        bottom: auto;
        margin: auto;
    }

    @media ${({theme}) => theme.media.mobile} {
        top: 50px;
        max-width: 300px; 
        height: 265px;
        padding: 40px 18px 35px 28px; 
        border-radius: 54px 0px; 
        border: 1px solid #FFF;      
    }
`

const SocialList = styled.ul`
    display: flex;
    column-gap: 16px;    
    align-self: flex-end; 

    @media ${({theme}) => theme.media.mobile} {
        display: none;      
    }  
` 

const List = styled.ul`
    display: flex;
    column-gap: 16px;
    flex-direction: column;
    list-style-image: url(${h2Decor});    
    margin-left: 24px;

    li {        
        padding-left: 12px;
        color: #393939;
        font-size: 20px;
        line-height: 136%;

        & + li {
            margin-top: 6px;
        }        
    }

    @media ${({theme}) => theme.media.mobile} {
        list-style-image: none;
        margin-left: 0;
        li {
            position: relative;
            display: flex;
            font-size: 11px; 
            padding-left: 15px;

            & + li {
                margin-top: 3px;
            }
        }
        
        li::before {
            position: absolute;
            content: "";
            width: 10px;
            height: 10px;
            background: linear-gradient(180.00deg, rgb(166, 188, 250),rgb(33, 87, 242) 100%),rgb(217, 217, 217);
            border-radius: 50%;
            left: 0;
            top: 0;
        }
    }
`

export const S = {
    LocationMap,
    AboutBox,
    SocialList,
    List
}