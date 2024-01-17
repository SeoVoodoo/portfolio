import { styled } from 'styled-components';

type ButtonPropsType = {
    padding?: string,
    backgroundColor?: string,
    color?: string
}

export const StyledBtn = styled.button<ButtonPropsType>`
    border: none;
    border-radius: 20px;
    background-color: ${props => props.backgroundColor || "#2157F2"};
    padding: ${props => props.padding || "4px 18px 4px 19px"};
    color: ${props => props.color || "white"};    
`