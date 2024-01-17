import { styled } from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

type SliderPropsType = {
    title: string
} 

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
         <Title>{props.title}</Title>
         <FlexWrapper gap={'12px'}>
            <Slide></Slide>
            <Slide></Slide>
            <Slide></Slide>
            <Slide></Slide>
         </FlexWrapper>                    
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    margin-bottom: 20px;        
`

const Title = styled.h3`
    margin-bottom: 10px;
    color: white;   
`

const Slide = styled.div`
    width: 330px;
    height: 192px;
    border-radius: 9px;
    background: #D9D9D9;
    box-shadow: 5px 6px 10px 0px rgba(0, 0, 0, 0.10);    
`