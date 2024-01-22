import { styled } from "styled-components";
import { StyledCardBtn } from "../../../../conponents/Button.styled";
import { StyledLink } from "../../../../conponents/Link.styled";
import { FlexWrapper } from "../../../../conponents/FlexWrapper";

type ProjectPropsType = {
    src: string,
    title: string
}


export const Project = (props: ProjectPropsType) => {
    
    return (
        <StyledProject src={props.src} title={props.title} >
            {/* <Image src={props.src}/> */}
            <ContentWrapper>
                <Title>{props.title}</Title>
                <FlexWrapper justify="space-between" align="center">
                    <StyledCardBtn>Edit for you</StyledCardBtn>
                    <Link>see preview</Link>
                </FlexWrapper>
            </ContentWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div<ProjectPropsType>`
    background-image:url(${props => props.src});
    max-width: 270px;
    width: 100%;
    min-height: 394px;
    border-radius: 26px;
    padding-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;    

    &:hover div {
        background-color: ${({theme}) => theme.colors.wrapHover};
    }

    &:hover h3 {
        color: #FFFFFF;
    }

    &:hover button {
        background-color: #2157f2;
        color: ${({theme}) => theme.colors.btnAncorHover};
    }

    &:hover a {
        color: #FFFFFF;
    }
`
const ContentWrapper = styled.div`    
    background-color: ${({theme}) => theme.colors.wrapper};
    padding: 20px 20px 25px; 
    transition: all .3s linear;   
`

const Title = styled.h3`
    font-size: 20px;
    line-height: 150%;
    color: ${({theme}) => theme.colors.h3};
    margin-bottom: 25px;    
`

const Link = styled.a`
    color: ${({theme}) => theme.colors.prevLink};
    font-size: 14px;
    line-height: 148%;
    cursor: pointer;
    transition: color .3s linear;
`


