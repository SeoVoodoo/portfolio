import { styled } from "styled-components";
import { Icon } from "./icon/Icon";

export const Plus = () => {
    return (
        <StyledPlus>
            <Icon 
                id={"plus"} 
                width={"108"} 
                height={"107"} 
                viewBox={"0 0 108 107"}
                fill={"#2157F2"}
            />   
        </StyledPlus>
    );
};

const StyledPlus = styled.div`
    position: absolute;
    top: 82px;
    left: 35%;    
`

export const Circle = () => {
    return (
        <StyledCircle>
            <Icon 
                id={"circle"} 
                width={"152"} 
                height={"152"} 
                viewBox={"0 0 152 152"}                
                stroke={"#2157F2"}
            />   
        </StyledCircle>
    )
}

const StyledCircle = styled.div`
    position: absolute;
    top: 515px;
    right: 8%;    
`
