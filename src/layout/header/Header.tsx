import styled from "styled-components";
import { Logo } from "../../conponents/logo/Logo";
import { Menu } from "../../conponents/menu/Menu";
import { FlexWrapper } from "../../conponents/FlexWrapper";
import { ToggleTheme } from "../../conponents/ToggleTheme";



const ancors = ["Home", "Projects", "About", "Contact"];

type HeaderPropsType = {
    handleToggleTheme?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void//(e: React.MouseEvent<HTMLAnchorElement> | undefined) => void
} 

export const Header = (props: HeaderPropsType) => {

    return (        
        <StyledHeader>                     
            <FlexWrapper align={'center'} >
                <Logo />
                <Wrap>
                    <Menu menuItems={ancors}/>
                    <ToggleTheme handleToggleTheme={props.handleToggleTheme} />
                </Wrap>
            </FlexWrapper>
        </StyledHeader>        
    );
}


const StyledHeader = styled.header`    
    background-image: ${({theme}) => theme.bgImage};
    background-repeat: no-repeat;
    background-position: 0 0;            
    min-height: 10vh;
    height: 100%;
    padding: 33px 43px 0 35px;
    //transition: all 0.25s linear;
    /* border: 1px solid red; */
`
const Wrap = styled.div`
    max-width: 100%;
    margin-left: auto;
    
`

