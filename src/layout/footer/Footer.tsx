import { styled } from "styled-components";
import bgFooter from "../../assets/images/wave.svg";

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Coded by Alireza Kavousy nezhad</Name>
            <Text>All Rights Reserved 2022</Text>            
        </StyledFooter>
    );
};


const StyledFooter = styled.section`
    background-image: url(${bgFooter});
    background-repeat: repeat-y;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Name = styled.span`

`
const Text = styled.small`

`

