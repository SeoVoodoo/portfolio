import React, { useState } from 'react';
import { Menu } from "../menu/Menu";
import { S } from '../hederMenu_Styles';



export const MobileMenu: React.FC = () => {

    const [isOpenMenu, setIsOpenNenu] = useState(false);

    const handleBurgerBtnClick = () => {
        setIsOpenNenu(!isOpenMenu);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpenMenu} onClick={handleBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isOpenMenu} /* onClick={() => setIsOpenNenu(false)} */ >
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
}







