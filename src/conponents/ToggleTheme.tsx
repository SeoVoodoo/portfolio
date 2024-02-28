import React from 'react';
import { styled } from 'styled-components';
import { Icon } from './icon/Icon';
import { MouseEventHandler } from 'react';

type ToggleThemePropsType = {
    handleToggleTheme?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void//(e: React.MouseEvent<HTMLAnchorElement> | undefined) => void
}

export const ToggleTheme: React.FC<ToggleThemePropsType> = (props: ToggleThemePropsType) => {    

    return (        
            <Link onClick={props.handleToggleTheme}>            
                <Icon id={"moon"} width={"36"} height={"37"} viewBox={"0 0 25 25"}/>
            </Link>        
    );
};
const Link = styled.a`
    display: inline-block;
    margin-left: 64px;
    vertical-align: middle;
    cursor: pointer;    
`


