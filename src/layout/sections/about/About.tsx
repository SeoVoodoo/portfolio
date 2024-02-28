import React from 'react';
import { Circle, Plus } from '../../../conponents/Decoration';
import { AboutInner } from './AboutInner';

import { Container } from '../../../conponents/Container';
import { FlexWrapper } from '../../../conponents/FlexWrapper';
import { S } from './About_Styles';



export const About: React.FC = () => {
    return (
        <S.About id={"home"}>
            <Container>
                <FlexWrapper direction={'column'}>
                    <S.WrapAboutInner>
                        <Plus /> 
                        <Circle />
                        <AboutInner />
                    </S.WrapAboutInner>
                </FlexWrapper>                
            </Container>
        </S.About>
    );
};



