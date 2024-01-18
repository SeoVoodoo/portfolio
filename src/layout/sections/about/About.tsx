import { styled } from 'styled-components';
import { Circle, Plus } from '../../../conponents/Decoration';
import { AboutInner } from '../../../conponents/AboutInner';
import { Skills } from '../../../conponents/skills/Skills';
import { Container } from '../../../conponents/Container';
import { FlexWrapper } from '../../../conponents/FlexWrapper';

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper direction={'column'}>
                    <Plus /> 
                    <Circle />
                    <AboutInner />
                    <Skills />
                </FlexWrapper>                
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    background-image: linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30% );
    background-repeat: no-repeat;
    background-position: 0 0;
    padding-top: 75px;    
    position: relative;    
    height: 90vh;    
`

