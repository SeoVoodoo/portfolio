import { styled } from "styled-components";
import { StyledCardBtn } from "../../../../conponents/Button.styled";

import { FlexWrapper } from "../../../../conponents/FlexWrapper";

type ProjectPropsType = {
    src: string,
    title: string
}


export const Project = (props: ProjectPropsType) => {
    
    return (
        <StyledProject src={props.src} title={props.title}>            
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
    background-position: center;
    background-size: cover;

    border-radius: 26px;
   
    /* max-width: 270px; */
    
    width: 100%;
    height: 100%;    
    /* min-height: 394px;  */
    
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

    ${StyledCardBtn} {
        @media ${({theme}) => theme.media.mobile} {
            font-size: 10px;
            padding: 2px 10px;
        }
    }    
`
const ContentWrapper = styled.div`    
    background-color: ${({theme}) => theme.colors.wrapper};
    padding: 20px 20px 25px; 
    border-radius: 0 0 26px 26px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    /* transition: all .3s linear;    */
`

const Title = styled.h3`
    font-size: 20px;
    line-height: 150%;
    color: ${({theme}) => theme.colors.h3};
    margin-bottom: 25px; 
    
    @media ${({theme}) => theme.media.mobile} {
        font-size: 12px;
    }

`

const Link = styled.a`
    color: ${({theme}) => theme.colors.prevLink};
    font-size: 14px;
    line-height: 148%;
    cursor: pointer;
    
    @media ${({theme}) => theme.media.mobile} {
        font-size: 10px;        
    }
`


