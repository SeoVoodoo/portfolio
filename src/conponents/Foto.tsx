import React from 'react';
import styled from 'styled-components';
import foto from '../assets/images/photo.webp'

export const Foto = () => {
    return (
        <StyledFoto>
            <img src={foto} /> 
        </StyledFoto>
    );
};

const StyledFoto = styled.div`
    width: 400px;
    height: 400px;
    border: 25px solid #FFF;
    border-radius: 50%;    
    overflow: hidden;
    transform: rotate(-3deg);

    img {
        width: auto;
        height: 100%;
        filter: brightness(140%);        
    }

`

