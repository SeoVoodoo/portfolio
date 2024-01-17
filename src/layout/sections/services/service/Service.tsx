
import styled from 'styled-components';
import { Icon } from '../../../../conponents/icon/Icon';
import { StyledLink } from '../../../../conponents/Link.styled';

type ServicePropsType = {
    title: string,
    id: string,
    width?: string,
    height?: string,  
    viewBox?: string,
    fill?: string,
    stroke?: string    
}


export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Icon 
                id={props.id}
                width={props.width}
                height={props.height}
                viewBox={props.viewBox}            
            />
            <Title>{props.title}</Title>
            <StyledLink href="#" color={"#2157F2"}>View More</StyledLink>
            <Link href="#">
                <Icon 
                    id={"arrow"}
                    width={"21"}
                    height={"21"}
                    viewBox={"0 0 21 21"}            
                />
            </Link>            
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 334px;    
    max-height: 402px;
    min-height: 187px;
    background: #FFF;
    box-shadow: 0px 15px 29px 0px rgba(0, 0, 0, 0.05);
`
const Link = styled.a`
    
`

const Title = styled.h2`
    
`
