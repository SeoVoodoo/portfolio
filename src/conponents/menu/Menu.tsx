import { styled } from "styled-components";




export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((ancor, index) => {

                    return <li key={index}>
                            <a href="#">{ancor}</a>
                        </li>
                })}
            </ul>
        </StyledMenu>
    );
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`