import React from 'react';
import foto from '../../../assets/images/photo.webp'
import { S } from './About_Styles';
import Tilt from 'react-parallax-tilt';

export const Foto: React.FC = () => {
    return (
        <Tilt
            // className="background-stripes parallax-effect-glare-scale"
            // perspective={500}        
            // glareEnable={true}        
            // glareMaxOpacity={0.45}    
            // scale={1.02}
        >
            <S.Foto>
                <img src={foto} /> 
            </S.Foto>
        </Tilt>
    );
};



