import React from 'react';
import styled from 'styled-components';
import { Foto } from './Foto';
import { MyName } from './MyName';
import { StyledBtn } from './Button.styled';
import { StyledLink } from './Link.styled';
import { FlexWrapper } from './FlexWrapper';

export const AboutInner = () => {
    return (
        <StyledAboutInner>

            <Foto />
            <Info>
                <FlexWrapper direction={"column"}>
                    <MyName />
                    <Text>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</Text>
                    <FlexWrapper gap='20px' align='center'>
                        <StyledBtn
                            padding = {'15px 79px 16px 36px'}            
                        >
                            <span>See Projects</span>
                        </StyledBtn>
                        <StyledLink href="#" color={"#6C92FF"} fontWeight={"600"}>Download Resume</StyledLink>
                    </FlexWrapper>
                </FlexWrapper>
            </Info>            
        </StyledAboutInner>
    );
};

const StyledAboutInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1158px;
    min-height: 500px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 0 130px 0 104px;    
    border-radius: 200px 0;
    border: 2px solid ${({theme}) => theme.colors.border};
    background: ${({theme}) => theme.gradient};
    backdrop-filter: blur(10px);
`
const Info = styled.div`
    margin-left: 70px;
    
`
const Text = styled.p`
    max-width: 376px;
    color: ${({theme}) => theme.colors.text};
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 40px;
`

