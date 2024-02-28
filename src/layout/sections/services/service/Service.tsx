
import React from 'react';
import { Icon } from '../../../../conponents/icon/Icon';
import { S } from '../Services_Styles';



type ServicePropsType = {
    title: string,
    id: string,
    width?: string,
    height?: string,  
    viewBox?: string,
    fill?: string,
    stroke?: string    
}


export const Service: React.FC<ServicePropsType> = (props: ServicePropsType) => {
    return (        
        <S.Service>
            
            <Icon 
                id={props.id}
                width={props.width}
                height={props.height}
                viewBox={props.viewBox}            
            />
            <S.Title>{props.title}</S.Title>
            <S.Link href={"#"}>
                View More            
                <Icon 
                    id={"arrow"}
                    width={"21"}
                    height={"21"}
                    viewBox={"0 0 21 21"}
                    fill={"rgba(33, 87, 242, 1)"}            
                />            
            </S.Link> 
                       
        </S.Service>
    );
};



