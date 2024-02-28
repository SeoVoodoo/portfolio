import React from "react";
import { styled } from "styled-components";
import { Icon } from "./icon/Icon";
import { useCallback, useEffect, useState } from "react";



export const Plus: React.FC = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const onChangeWindowSize = useCallback(() => {
        const query = window.matchMedia('(max-width: 480px)');

        if (query.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onChangeWindowSize);

        return () => {
            window.removeEventListener('resize', onChangeWindowSize)
        }
    }, [])

    return (
        <StyledPlus>
            <Icon 
                id={"plus"} 
                width={isSmallScreen ? "88" : "108"} 
                height={isSmallScreen ? "88" : "107"} 
                viewBox={isSmallScreen ? "0 0 108 107" : "0 0 108 107"}
                fill={"#2157F2"}
            />   
        </StyledPlus>
    );
};

const StyledPlus = styled.div`
    position: absolute;
    top: -75px;
    left: 375px; 

    @media screen and (max-width: 1280px){
        left: 29.35vw;
    }
    
    @media ${({theme}) => theme.media.tablet} {
        top: -55px;
        left: 75%;        
    }
`

export const Circle: React.FC = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const onChangeWindowSize = useCallback(() => {
        const query = window.matchMedia('(max-width: 480px)');

        if (query.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onChangeWindowSize);

        return () => {
            window.removeEventListener('resize', onChangeWindowSize)
        }
    }, [])

    return (
        <StyledCircle>
            <Icon 
                id={"circle"} 
                width={isSmallScreen ? "99" :"152"} 
                height={isSmallScreen ? "99" : "152"} 
                viewBox={isSmallScreen ? "0 0 152 152" : "0 0 152 152"}                
                stroke={"#2157F2"}
            />   
        </StyledCircle>
    )
}

const StyledCircle = styled.div`
    position: absolute;
    top: 365px;
    right: 60px; 

    @media screen and (max-width: 1280px){
        right: 3.75vw;
    }
    
    @media ${({theme}) => theme.media.tablet} {
        top: 542px;
        right: 5vw;        
    }

    @media ${({theme}) => theme.media.mobile} {
        top: 530px;
        right: 1vw;        
    }

    @media screen and (max-width: 480px) {
        top: 550px;
        right: 1vw;        
    }

    @media screen and (max-width: 420px) {
        top: 420px;
        right: 1vw;        
    }
   
`

