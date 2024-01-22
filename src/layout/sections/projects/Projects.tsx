import styled from "styled-components";
import { SectionTitle } from "../../../conponents/SectionTitle";
import { dataProjects } from "../../../assets/data/dataProjects";
import { Project } from "./project/Project";
import { Container } from "../../../conponents/Container";
import { TabMenu } from "./tabMenu/TabMenu";

const tabs = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"];

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={tabs} />            
                    <List>
                        {dataProjects.map(project => { 

                            return <li key={project.idProject}>
                                <Project                            
                                    src={project.src}
                                    title={project.title}                            
                                />
                            </li>
                            
                        })}                    
                    </List>   
            </Container>                     
        </StyledProjects>        
    );
};

const StyledProjects = styled.section`
min-height: 100vh;
background-color: ${({theme}) => theme.bg};    
`
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 38px;    
`

