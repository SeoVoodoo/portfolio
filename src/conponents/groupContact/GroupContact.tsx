import React from 'react';
import { styled } from 'styled-components';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../FlexWrapper';

export const GroupContact = () => {
    return (
        <StyledGroupContact>
            <FlexWrapper direction={"column"}>
            <Group>
                <Icon
                    id={"location2"}
                    width={"38"} 
                    height={"38"}
                    viewBox={"0 0 38 38"}
                />

                <Wrapper>
                    <Title>Location</Title>
                    <Text>Mashhad/Iran</Text>
                </Wrapper>
            </Group>
            <Group>
                <Icon
                    id={"telefone"}
                    width={"38"} 
                    height={"38"}
                    viewBox={"0 0 38 38"}
                />
                <Wrapper>
                    <Title>Phone</Title>
                    <Text>+989150063913</Text>
                </Wrapper>
            </Group>
            <Group>
                <Icon
                    id={"email"}
                    width={"38"} 
                    height={"38"}
                    viewBox={"0 0 38 38"}
                />
                <Wrapper>
                    <Title>Email</Title>
                    <Text>arkn3913@gmail.com</Text>
                </Wrapper>
            </Group>
            </FlexWrapper>
                     
        </StyledGroupContact>
    );
};

const StyledGroupContact = styled.div`
`
const Group = styled.div`
    display: flex;
    min-height: 38px;
    margin-bottom: 30px;

`
const Wrapper = styled.div`

`
const Title = styled.h3`
    color: #000;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 136%;
`
const Text = styled.span`
    color: #8B8B8B;    
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
`

 