import { styled } from "styled-components";
import { MyName } from "../../../conponents/MyName";
import { SocialItem } from "../../../conponents/social/SocialItem";
import { FlexWrapper } from "../../../conponents/FlexWrapper";
import mapBgn from '../../../assets/images/map.webp';
import  avtor  from "../../../assets/images/photo-big.webp";
import  autor  from "../../../assets/images/autor.webp";

const myInfo = 
    [
        "I was born in Iran-Mashhad", 
        "I’m 20 years old",
        "I have started my interest in this field from 2019",
        "I’m designer , video editor , web developer and ...",
        "My phone number in Iran +989212073348"        
    ]

export const LocationMap = () => {
    return (
        <StyledLocationMap>            
            <AboutBox>
                <FlexWrapper direction={"column"}>
                    <SocialList>
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
                    </SocialList>
                    <MyName />
                    <List>
                        {myInfo.map((str, index) => <li key = {index}>{str}</li>)}                        
                    </List>
                </FlexWrapper>    
            </AboutBox>
                        
        </StyledLocationMap>
    );
};

const StyledLocationMap = styled.section`
    background-color: #A6BCFA;
    background-image: url(${autor}), url(${mapBgn});
    background-position: right 0 bottom 0, left 42px top 68px;
    background-repeat: no-repeat;
    width: 100%;
    /* height: 100vh; */
    height: 930px;
    padding-top: 400px;    
`

const AboutBox = styled.div`
    margin-left: 116px; 
    max-width: 563px;    
    padding: 30px 24px 65px 59px;
    border-radius: 100px 0px;
    border: 2px solid #FFF;
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
    backdrop-filter: blur(10px);
`

const SocialList = styled.ul`
    display: flex;
    column-gap: 16px;    
    align-self: flex-end;    
` 

const List = styled.ul`
    display: flex;
    column-gap: 16px;
    flex-direction: column;
    
`
