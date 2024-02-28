import React from "react";
import { styled } from "styled-components";
import { Container } from "../../../conponents/Container";
import Dots from "./../../../assets/images/dots.svg";
import Cross from "./../../../assets/images/cross.svg";

const Projects = styled.section`
    position: relative;
    background-color: ${({theme}) => theme.bg};
    
    ${Container} {
        position: relative;
        z-index: 0;

        &::before {        
            content: url(${Dots});
            position: absolute;
            left: 25px;
            top: 30px;
            z-index: -1;

            @media ${({theme}) => theme.media.tablet} {
                display: none;
            }
        }

        &::after {        
            content: url(${Cross});
            width: 361px;
            height: 392px;
            position: absolute;
            right: -105px;
            bottom: -165px;
            z-index: -1;

            @media screen and (max-width: 1600px){
                width: 180.5px;
                height: 196px;
                right: -25px;
                bottom: -90px;
            }

            @media screen and (max-width: 1320px){
                right: 265px;
                bottom: -90px;
            }

            @media ${({theme}) => theme.media.tablet} {
                display: none;
            }
        }        
    }
`

const List = styled.ul`
    
    display: grid;
    grid-template-columns: repeat(auto-fit, 270px);
    grid-auto-rows: 394px;
    /* grid-template-rows: 394px; */
    justify-content: center;
    column-gap: 38px;
    row-gap: 50px; 

    @media ${({theme}) => theme.media.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(180px, 270px));
        column-gap: 30px;
        row-gap: 35px;
    }

    @media ${({theme}) => theme.media.mobile} {
        grid-template-columns: repeat(auto-fit, 180px);
        grid-auto-rows: 239px;
        column-gap: 23px;
        row-gap: 29px;
    }
    
    li {
        
        /* display: flex;
        max-width: 270px;
        width: 100%; */
    }
`

// Project 




export const S = {
    Projects,
    List

}