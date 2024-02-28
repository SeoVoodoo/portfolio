import React from 'react';
import { Logo } from "../../conponents/logo/Logo";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { FlexWrapper } from "../../conponents/FlexWrapper";
import { ToggleTheme } from "../../conponents/ToggleTheme";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from './Header_Styles';





type HeaderPropsType = {
    handleToggleTheme?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void//(e: React.MouseEvent<HTMLAnchorElement> | undefined) => void
} 

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;
    const handleWindowResize = () => setWidth(window.innerWidth);

    React.useEffect(() => {        
        window.addEventListener("resize", handleWindowResize);        
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    return (        
        <S.Header>                     
            <FlexWrapper align={'center'} >
                <Logo />
                <S.Wrap>
                    {width > breakpoint ? <DesktopMenu /> : <MobileMenu />}
                    <ToggleTheme handleToggleTheme={props.handleToggleTheme} />
                </S.Wrap>
            </FlexWrapper>
        </S.Header>        
    );
}




