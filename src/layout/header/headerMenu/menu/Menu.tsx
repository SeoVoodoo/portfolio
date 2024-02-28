import React from 'react';
import { S } from '../hederMenu_Styles';

// const ancors = ["Home", "Projects", "About", "Contact"];

const links = [
    {
        ancor: "Home",
        href: "home"
    },
    {
        ancor: "Projects",
        href: "projects"
    },
    {
        ancor: "About",
        href: "about"
    },
    {
        ancor: "Contact",
        href: "contact"
    }
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {links.map((link, index) => {

                return <S.MenuItem key={index}>
                        <S.NavLink 
                            activeClass="active"
                            to={link.href}
                            smooth={true}
                            spy={true}
                        >
                            {link.ancor}
                            <S.Mask>
                                <span>{link.ancor}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{link.ancor}</span>
                            </S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
            })}
        </ul>
    );
};


