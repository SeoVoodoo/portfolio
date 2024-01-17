import React from 'react';
import { styled } from 'styled-components';

export const MyName = () => {
    return (
        <StyledMyName>
            <span>I’m <span>Alireza</span><br />Kavousy nezjad</span>           
        </StyledMyName>
    );
};

const StyledMyName = styled.div`
 max-width: 463px;
    
`

