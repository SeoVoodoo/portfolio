import { styled } from "styled-components";
import { SectionTitle } from "../../../conponents/SectionTitle";
import { StyledBtn } from "../../../conponents/Button.styled";
import { GroupContact } from "../../../conponents/groupContact/GroupContact";
import { FlexWrapper } from "../../../conponents/FlexWrapper";
import { SocialItem } from "../../../conponents/social/SocialItem";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact Us</SectionTitle>
            <Box>
                <Title>Get in touch</Title>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} align={"flex-start"}>
                    <StyledForm>                    
                        <Field type={"email"} placeholder={"E-mail"} />
                        <Field type={"phone"} placeholder={"Phone"} />                                       
                        <Field placeholder={"Massage"} as={'textarea'} />
                        <StyledBtn>Send</StyledBtn>
                    </StyledForm>
                    <GroupContact />
                </FlexWrapper>                
            </Box>       
            <SocialList>
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
            </SocialList>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: #fff;
    min-height: 50vh;    
`
const Box = styled.div`
    max-width: 932px;
    background: #FFF;
    box-shadow: 8px 8px 34px 0px rgba(0, 0, 0, 0.05);
    margin: 0 auto;
    padding: 53px 110px 46px 82px;
    
`

const Title = styled.h3`
    color: #000;    
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 136%;    
`
const StyledForm = styled.form`
    max-width: 430px;
    width: 100%;  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;    
`
const Field = styled.input` 
    width: 100%; 

    &[type] {        
        max-width: 49%;
    }  
    
`
const SocialList = styled.ul`
    display: flex;
    column-gap: 22px;    
    justify-content: center;  
` 


