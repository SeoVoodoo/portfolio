import React from 'react';

import { Foto } from './Foto';
import { MyName } from '../../../conponents/MyName';
import { StyledBtn } from '../../../conponents/Button.styled';
import { StyledLink } from '../../../conponents/Link.styled';
import { FlexWrapper } from '../../../conponents/FlexWrapper';
import { Icon } from '../../../conponents/icon/Icon';
import { S } from './About_Styles';


export const AboutInner: React.FC = () => {
    return (
        <S.AboutInner>
            <Foto />
            <S.Info>
                <FlexWrapper direction={"column"}>
                    <MyName />
                    <S.Text>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.
                                       
                    </S.Text>
                    <FlexWrapper gap='30px' align='center' wrap='wrap'>
                        <StyledBtn as="a" href='#'>
                                See Projects
                                    <Icon 
                                        id={"arrow"}
                                        width={"28"}
                                        height={"28"}
                                        viewBox={"0 -4 28 28"}                                        
                                        fill={"#FFFFFF"}           
                                    />
                        </StyledBtn>
                        <StyledLink href="#" color={"#6C92FF"} fontWeight={"600"}>Download Resume</StyledLink>
                    </FlexWrapper>
                </FlexWrapper>
            </S.Info>            
        </S.AboutInner>
    );
};



