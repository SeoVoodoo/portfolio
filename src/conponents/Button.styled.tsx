import { styled } from 'styled-components';

type ButtonPropsType = {
    padding?: string,
    backgroundColor?: string,
    color?: string
}

export const StyledBtn = styled.button<ButtonPropsType>`
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: ${props => props.backgroundColor || "#2157F2"};
    padding: ${props => props.padding || "4px 18px 4px 19px"};
    color: ${props => props.color || "white"};    
`

export const StyledCardBtn = styled(StyledBtn)`
    font-weight: 700;
    font-size: 14px;
    line-height: 148%;
    background-color: ${({theme}) => theme.colors.btn};   
    color: ${({theme}) => theme.colors.btnAncor};
`