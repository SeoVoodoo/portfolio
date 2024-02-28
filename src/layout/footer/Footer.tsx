import React from "react";
import { S } from "./Footer_Styles";


export const Footer: React.FC = () => {
    return (
        <S.Footer> 
            <S.Wave></S.Wave>          
            <S.Wrap>
                <S.Name>Coded by Alireza Kavousy nezhad</S.Name>
                <S.Text>All Rights Reserved 2022</S.Text>
            </S.Wrap>                    
        </S.Footer>
    );
};