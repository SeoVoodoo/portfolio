import { styled } from 'styled-components';



 

export const Slider = () => {
    return (
        <StyledSlider>
         <Title>{}</Title>
         <SlideWrapper>
            <Slide>1</Slide>
            <Slide>2</Slide>
            <Slide>3</Slide>
            <Slide>4</Slide>                      
         </SlideWrapper>                    
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    margin-bottom: 20px; 
    margin-left: 80px;       
`

const Title = styled.h3`
    margin-bottom: 10px;
    color: white;   
`

const SlideWrapper = styled.div`
    display: flex;
    gap: 12px;
    overflow: hidden;
`

const Slide = styled.div`
    width: 330px;
    height: 192px;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 9px;
    background: #D9D9D9;
    box-shadow: 5px 6px 10px 0px rgba(0, 0, 0, 0.10);    
`