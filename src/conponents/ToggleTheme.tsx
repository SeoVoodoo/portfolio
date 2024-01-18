
import { styled } from 'styled-components';
import { Icon } from './icon/Icon';

export const ToggleTheme = () => {
    return (  
        
            <Link href="/">            
                <Icon id={"moon"} width={"36"} height={"37"} viewBox={"0 0 25 25"}/>
            </Link>
        
    );
};
const Link = styled.a`
    display: inline-block;
    margin-left: 64px;
    vertical-align: middle;    
`


