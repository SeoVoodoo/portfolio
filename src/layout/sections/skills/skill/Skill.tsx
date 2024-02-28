import React from "react";
import { Icon } from '../../../../conponents/icon/Icon';
import { S } from '../Skills_Style';


type SkillPropsType = {
    id: string,
    width?: string,
    height?: string,  
    viewBox?: string,    
    text?: string    
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    // console.log({width: props.width, height: props.height})
    return (
        <S.Skill>
            <S.WrapIcon>
                <Icon 
                    id={props.id} 
                    width={props.width} 
                    height={props.height} 
                    viewBox={props.viewBox}
                />                
            </S.WrapIcon>
          <span>{props.text}</span>  
        </S.Skill>
    );
};



