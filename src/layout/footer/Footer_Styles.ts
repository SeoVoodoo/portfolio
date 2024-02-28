import { styled } from "styled-components";

const Footer = styled.footer`

`
const Wave = styled.div`
    background-image: ${({theme}) => theme.colors.footer.bg};    
    background-repeat: repeat;
    background-position: top 0 left 0;
    min-height: 125px;
    width: 100%;
`

const Wrap = styled.div`
    background-color: ${({theme}) => theme.colors.footer.bgColor};
    padding: 0 0 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Name = styled.span`
    color: #FFFFFF;
    font-weight: 700;
    margin-bottom: 5px;
`
const Text = styled.small`
    color: #FFFFFF;
    font-size: 12px
`

export const S = {
    Footer,
    Wave,
    Wrap,
    Name,
    Text
}