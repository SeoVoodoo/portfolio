import React, { useEffect, useState } from 'react';
import { Icon } from '../../../../conponents/icon/Icon';
import { S } from '../Contact_Styles';


export const GroupContact: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const tablet = 768;
    const mobile = 576;

    const handleWindowResize = () => setWidth(window.innerWidth);

    useEffect(() => {        
        window.addEventListener('resize', handleWindowResize );

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);


    return (
        <S.GroupContact>           
            <S.Group>
                <Icon
                    id={"location"}                    
                    width={width > mobile ? (width > tablet ? '38' : '72') : '44'}
                    height={width > mobile ? (width > tablet ? '38' : '72') : '44'}
                    viewBox={"5 0 38 38"}                    
                    fill={'#2157F2'}
                />
                <S.Wrapper>
                    <S.Title_h4>Location</S.Title_h4>
                    <S.Text>Mashhad/Iran</S.Text>
                </S.Wrapper>
            </S.Group>
            <S.Group>
                <Icon
                    id={"telefone"}                    
                    width={width > mobile ? (width > tablet ? '38' : '72') : '44'}
                    height={width > mobile ? (width > tablet ? '38' : '72') : '44'}
                    viewBox={"0 0 26 26"}
                />
                <S.Wrapper>
                    <S.Title_h4>Phone</S.Title_h4>
                    <S.Text>+989150063913</S.Text>
                </S.Wrapper>
            </S.Group>
            <S.Group>
                <Icon
                    id={"email"}                    
                    width={width > mobile ? (width > tablet ? '38' : '72') : '44'}
                    height={width > mobile ? (width > tablet ? '38' : '72') : '44'}
                    viewBox={"0 0 38 38"}
                    fill={'#2157F2'}                    
                />
                <S.Wrapper>
                    <S.Title_h4>Email</S.Title_h4>
                    <S.Text>arkn3913@gmail.com</S.Text>
                </S.Wrapper>
            </S.Group>
        </S.GroupContact>
    );
};



 