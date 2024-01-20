import React from 'react';
import { styled } from 'styled-components';

export const MyName = () => {
    return (
        <StyledMyName>
            I’m <span>Alireza</span><br />Kavousy nezjad          
        </StyledMyName>
    );
};

const StyledMyName = styled.span`
    color: ${({theme}) => theme.colors.text};
    font-size: 60px;
    font-weight: 700;
    line-height: 136%;
    margin-bottom: 19px;

    span {
        color: #2157F2; 
    }
    
`

