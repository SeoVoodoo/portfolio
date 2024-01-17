import styled from 'styled-components';
import { Icon } from '../../icon/Icon';

type SkillPropsType = {
    id: string,
    width?: string,
    height?: string,  
    viewBox?: string,    
    text?: string    
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <div>
                <Icon 
                    id={props.id} 
                    width={props.width} 
                    height={props.height} 
                    viewBox={props.viewBox}
                />                
            </div>
          <span>{props.text}</span>  
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 161px;
    height: 91px;
    border-radius: 24px;
    background: #A6BCFA;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
    text-align: center;

    
    span {
        display: inline-block;
        color: white;        
    }

    div {
        width: 70px;
        height: 70px;
        margin: -30px auto 10px;        
        border-radius: 50%;
        border: 10px solid #FFF;
        overflow: hidden;
        background-color: #000B1D;
    }
    
`

