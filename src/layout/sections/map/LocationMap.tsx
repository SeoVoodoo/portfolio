import React from 'react';
import { MyName } from "../../../conponents/MyName";
import { SocialItem } from "../../../conponents/social/SocialItem";
import { FlexWrapper } from "../../../conponents/FlexWrapper";
import { Container } from "../../../conponents/Container";
import { S } from './LocationMap_Styles';

const myInfo = 
    [
        "I was born in Iran-Mashhad", 
        "I’m 20 years old",
        "I have started my interest in this field from 2019",
        "I’m designer , video editor , web developer and ...",
        "My phone number in Iran +989212073348"        
    ]

export const LocationMap: React.FC = () => {
    return (
        <S.LocationMap id={"about"}>
            <Container>            
                <S.AboutBox>
                    <FlexWrapper direction={"column"}>
                        <S.SocialList>
                            <SocialItem 
                                id={"whatsap"} 
                                width={"26"} 
                                height={"26"} 
                                viewBox={"0 0 26 26"}
                                link={"#"}                        
                            />
                            <SocialItem 
                                id={"instagramm"} 
                                width={"26"} 
                                height={"26"} 
                                viewBox={"0 0 26 26"}
                                link={"#"}                        
                            />
                            <SocialItem 
                                id={"vector"} 
                                width={"26"} 
                                height={"26"} 
                                viewBox={"0 0 26 26"}
                                link={"#"}                        
                            />
                        </S.SocialList>
                        <MyName />
                        <S.List>
                            {myInfo.map((str, index) => <li key = {index}>{str}</li>)}                        
                        </S.List>
                    </FlexWrapper>    
                </S.AboutBox>
            </Container>           
        </S.LocationMap>
    );
};


