import styled from "styled-components";
import { Logo } from "../../conponents/logo/Logo";
import { Menu } from "../../conponents/menu/Menu";
import { FlexWrapper } from "../../conponents/FlexWrapper";
import { ToggleTheme } from "../../conponents/ToggleTheme";



const ancors = ["Home", "Projects", "About", "Contact"];
   

export const Header = () => {

    return (        
        <StyledHeader>                     
            <FlexWrapper align={'center'} >
                <Logo />
                <Wrap>
                    <Menu menuItems={ancors}/>
                    <ToggleTheme />
                </Wrap>
            </FlexWrapper>
        </StyledHeader>        
    );
}


const StyledHeader = styled.header`    
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30% );
    background-repeat: no-repeat;
    background-position: 0 0;            
    min-height: 10vh;
    height: 100%;
    padding: 33px 43px 0 35px;
    /* border: 1px solid red; */
`
const Wrap = styled.div`
    max-width: 100%;
    margin-left: auto;
    
`

