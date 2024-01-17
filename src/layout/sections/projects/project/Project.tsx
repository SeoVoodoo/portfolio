import { styled } from "styled-components";
import { StyledBtn } from "../../../../conponents/Button.styled";
import { StyledLink } from "../../../../conponents/Link.styled";

type ProjectPropsType = {
    src: string,
    title: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <StyledBtn>Edit for you</StyledBtn>
            <StyledLink>see preview</StyledLink>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #3fcfe9ef;
    max-width: 270px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const Title = styled.h3`
    
`

