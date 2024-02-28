import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400){
                setShowBtn(true);
            }
            else {
                setShowBtn(false);
            }
        })
        
    }, [])
    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon 
                        id={"arrowGoTop"}
                        width={"16"}
                        height={"15"}
                        viewBox={"0 0 16 15"}
                    />    
                </StyledGoTopBtn>
            )} 
        </>
    );
};

const StyledGoTopBtn = styled.button`    
    background-color: #2157F2;
    padding: 8px;
    cursor: pointer;

    position: fixed;
    z-index: 10;
    right: 30px;
    bottom: 30px;    
`
