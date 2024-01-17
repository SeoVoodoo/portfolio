import styled from "styled-components";
import { SectionTitle } from '../../../conponents/SectionTitle';
import { Slider } from "../../../conponents/slider/Slider";

export const Learning = () => {
    return (
        <StyledLearning>
            <SectionTitle>Learning</SectionTitle>
            <Slider title={"After Effects & Photoshop"}/>
            <Slider title={"Website , Html & cSS"}/>
        </StyledLearning>
    );
};

const StyledLearning = styled.section`
    background-color: #A5BBF8;
    min-height: 80vh;
    padding: 62px 0 76px 75px;
`