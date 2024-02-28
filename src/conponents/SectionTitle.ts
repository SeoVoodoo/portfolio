import { styled } from "styled-components";
import h2Decor from "../assets/images/h2_decoration.svg"

export const SectionTitle = styled.h2`
    color: ${({theme}) => theme.colors.h2};
    font-size: 32px;
    text-align: center;
    position: relative;
    margin-bottom: 85px;

    &::before {
        content: url(${h2Decor});
        display: inline-block;
        position: absolute;
        left: 50%;
        bottom: -35px;
        transform: translateX(-50%);

    }
`