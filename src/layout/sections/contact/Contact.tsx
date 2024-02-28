import React from 'react';
import { SectionTitle } from "../../../conponents/SectionTitle";
import { StyledBtn } from "../../../conponents/Button.styled";
import { GroupContact } from "./groupContact/GroupContact";
import { FlexWrapper } from "../../../conponents/FlexWrapper";
import { SocialItem } from "../../../conponents/social/SocialItem";
import { Container } from "../../../conponents/Container";
import { S } from './Contact_Styles';
import Typewriter from 'typewriter-effect';


export const Contact: React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact Us</SectionTitle>
                <S.Box>                    
                    <FlexWrapper justify={"space-between"} gap={"30px"} align={"flex-start"}>
                        <S.FormWrapper>
                            <S.Title>
                                <Typewriter
                                    options={{
                                        strings: ['Get in touch'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />       
                            </S.Title>   
                            <S.StyledForm>                                            
                                <S.Field type={"email"} placeholder={"e-mail"} />
                                <S.Field type={"phone"} placeholder={"phone"} />                                       
                                <S.Field placeholder={"massage"} as={'textarea'} />
                                <StyledBtn>Send</StyledBtn>
                            </S.StyledForm>
                        </S.FormWrapper>
                        <GroupContact />
                    </FlexWrapper>                
                </S.Box>       
                <S.SocialList>
                    <SocialItem                    
                        id={"instColor"} 
                        width={"33"} 
                        height={"33"} 
                        viewBox={"0 0 33 33"}
                        link={"#"}                        
                    />
                    <SocialItem 
                        id={"whatsapColor"} 
                        width={"32"} 
                        height={"33"} 
                        viewBox={"0 0 32 33"}
                        link={"#"}                        
                    />
                    <SocialItem 
                        id={"telegrammColor"} 
                        width={"33"} 
                        height={"33"} 
                        viewBox={"0 0 33 33"}
                        link={"#"}                        
                    />
                </S.SocialList>
            </Container>
        </S.Contact>
    );
};




