import styled from "styled-components";
import { Logo } from "../../conponents/logo/Logo";
import { Menu } from "../../conponents/menu/Menu";
import { FlexWrapper } from "../../conponents/FlexWrapper";
import { About } from "../../conponents/About";
import { ToggleTheme } from "../../conponents/ToggleTheme";
import { Circle, Plus } from "../../conponents/Decoration";
import { Skills } from "../../conponents/skills/Skills";


const ancors = ["Home", "Projects", "About", "Contact"];
   

export const Header = () => {

    return (        
        <StyledHeader> 
            <Plus /> 
            <Circle />          
            <FlexWrapper justify={"space-between"} bottom={"75px"}>
                <Logo />
                <Menu menuItems={ancors}/>
                <ToggleTheme />
            </FlexWrapper>            
            <About />
            <Skills />
        </StyledHeader>        
    );
}


const StyledHeader = styled.header`    
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30% );
    background-repeat: no-repeat;
    background-position: 0 0;
    display: flex;
    flex-direction: column;
    position: relative;    
    height: 100vh;
       
`

