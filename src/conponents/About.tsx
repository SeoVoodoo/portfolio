import React from 'react';
import styled from 'styled-components';
import { Foto } from './Foto';
import { MyName } from './MyName';
import { StyledBtn } from './Button.styled';
import { StyledLink } from './Link.styled';
import { FlexWrapper } from './FlexWrapper';

export const About = () => {
    return (
        <StyledAbout>

            <Foto />
            <FlexWrapper direction={"column"}>
                <MyName />
                <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</p>
                <FlexWrapper>
                    <StyledBtn
                        padding = {'15px 79px 16px 36px'}            
                    >
                        See Projects
                    </StyledBtn>
                    <StyledLink color={"#6C92FF"} fontWeight={"600"}>Download Resume</StyledLink>
                </FlexWrapper>
            </FlexWrapper>
                        
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1158px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 43px 130px 41px 104px;    
    border-radius: 200px 0;
    border: 2px solid #FFF;
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
    backdrop-filter: blur(10px);
`
