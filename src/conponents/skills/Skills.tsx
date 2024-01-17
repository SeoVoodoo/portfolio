import { styled } from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Skill } from "./skill/Skill";


export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper justify={"center"} gap={"12px"}>
                <Skill 
                    id={"photoshop"} 
                    width={"70"} 
                    height={"70"} 
                    viewBox={"3 3 38 38"}
                    text={"Photoshop"}
                />
                <Skill 
                    id={"afterEffects"} 
                    width={"70"} 
                    height={"70"} 
                    viewBox={"3 3 38 38"}
                    text={"After Effects"}
                />
                <Skill 
                    id={"illustrator"} 
                    width={"70"} 
                    height={"70"} 
                    viewBox={"3 3 38 38"}
                    text={"Illustrator"}
                />
                <Skill 
                    id={"figma"} 
                    width={"70"} 
                    height={"70"} 
                    viewBox={"-2 -1 50 50"}
                    text={"Figma"}
                />
            </FlexWrapper>            
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    
`
