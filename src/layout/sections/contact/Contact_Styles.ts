import { styled } from "styled-components"
import { FlexWrapper } from "../../../conponents/FlexWrapper"
import { font } from "../../../styles/Common"
import { StyledBtn } from "../../../conponents/Button.styled"

const Contact = styled.section`
    position: relative;
    background-color: ${({theme}) => theme.bg};
    min-height: 50vh;    
`
const Box = styled.div`
    max-width: 932px;
    background-color: ${({theme}) => theme.colors.contact.formBg};
    box-shadow: 8px 8px 34px 0px rgba(0, 0, 0, 0.05);
    margin: 0 auto;
    margin-bottom: 65px;
    padding: 53px 110px 46px 82px; 

    @media ${({theme}) => theme.media.tablet}{
        background-color: transparent;
        box-shadow: none; 
        padding: 0;
        margin-bottom: 40px;
        
        ${FlexWrapper} {
            flex-direction: column;
            align-items: center;
            gap: 45px;
        } 
    }

    @media ${({theme}) => theme.media.tablet}{
        margin-bottom: 75px; 
    }

    
`

const FormWrapper = styled.div`
    flex-shrink: 1;
    max-width: 430px;
    width: 100%; 

    @media ${({theme}) => theme.media.tablet}{
        max-width: 590px;
        width: 100%;
        padding: 50px 80px 45px; 
        margin: 0 auto;

        box-shadow: 8px 8px 34px 0px rgba(0, 0, 0, 0.05);         
    }

    @media ${({theme}) => theme.media.mobile}{
        padding: 30px 50px 25px;
    }    

`

const Title = styled.h3`
    color: ${({theme}) => theme.colors.contact.h3};   
    ${font({ weight: 500, Fmax: 36, Fmin: 22 })};    
    line-height: 136%;
    margin-bottom: 20px;    
`
const StyledForm = styled.form`
     
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 25px; 

    textarea {
        resize: none;
        height: 150px;
    }
    
    ${StyledBtn} {
        border-radius: 9px;
        padding: 10px 40px;
        font-weight: 600;
        line-height: 136%;
    }

    @media ${({theme}) => theme.media.mobile}{
        row-gap: 15px;

        textarea {            
            height: 92px;
        }
    }    
`
const Field = styled.input` 
    width: 100%;
    border-radius: 9px;
    background-color: ${({theme}) => theme.colors.contact.inputBg}; 
    border: none;
    font-family: "Roboto", sans-serif; 
    
    color: ${({theme}) => theme.colors.contact.inputColor}; 
    font-size: 13px;
    line-height: 136%;
    padding: 10px 30px;

    &::placeholder {
        color: #A5A5A5;
        text-transform: capitalize;
    }

    &[type] {        
        max-width: 49%;        
    }  

    &:focus-visible {
        outline: 1px solid #A5A5A5;
    }

    @media ${({theme}) => theme.media.mobile}{
        font-size: 10px;
        padding: 6px 18px;
    } 

    @media screen and (max-width: 415px) {
        &[type] {        
            max-width: 100%;        
        }    
    }
    
`
const SocialList = styled.ul`
    display: flex;
    column-gap: 22px;    
    justify-content: center;
` 


// groupContact

const GroupContact = styled.div`
    align-self: center;

    display: flex;
    flex-direction: column;

    @media ${({theme}) => theme.media.tablet}{
        max-width: 590px;
        width: 100%; 
        margin: 0 auto;
        padding: 60px 10px 90px 110px;
        box-shadow: 8px 8px 34px 0px rgba(0, 0, 0, 0.05); 

        align-items: flex-start;         
    }

    @media ${({theme}) => theme.media.mobile} {
        /* max-width: 360px; */
        padding: 35px 10px 55px 65px;
    }
`
const Group = styled.div`
    display: flex;
    align-items: center;    
    margin-bottom: 30px;
`
const Wrapper = styled.div`
    margin-left: 24px;
`
const Title_h4 = styled.h4`
    color: ${({theme}) => theme.colors.contact.h4};    
    font-weight: 500;
    line-height: 136%;

    @media ${({theme}) => theme.media.tablet} {
        font-size: 30px;
    }
    @media ${({theme}) => theme.media.mobile} {
        font-size: 19px;
    }
`
const Text = styled.span`
    color: #8B8B8B;
    font-size: 12px;
    line-height: 136%;

    @media ${({theme}) => theme.media.tablet} {
        font-size: 23px;
    }
    @media ${({theme}) => theme.media.mobile} {
        font-size: 14px;
    }
`

export const S = {
    Contact,
    Box,
    FormWrapper,
    Title,
    StyledForm,
    Field,
    SocialList,
    GroupContact,
    Group,
    Wrapper,
    Title_h4,
    Text
}