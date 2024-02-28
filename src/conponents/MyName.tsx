import React from 'react';
import { styled } from 'styled-components';
import { font } from '../styles/Common';

export const MyName: React.FC = () => {
    return (
        <StyledMyName>
            I’m <span>Alireza</span><br /><span>Kavousy nezjad</span>         
        </StyledMyName>
    );
};

const StyledMyName = styled.span`
    color: ${({theme}) => theme.colors.text};

    ${font({ weight: 700, Fmax: 60, Fmin: 28 })};
    
    margin-bottom: 19px;

    & > span:first-child {
        color: #2157F2;        
    }

    & > span:last-child {
        white-space: nowrap;
    }

    /* @media screen and (max-width: 992px){
        line-height: 1.15;
    } */
    
`

