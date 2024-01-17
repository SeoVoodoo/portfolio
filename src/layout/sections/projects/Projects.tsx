import styled from "styled-components";
import { SectionTitle } from "../../../conponents/SectionTitle";
import { Menu } from "../../../conponents/menu/Menu";
import { dataProjects } from "../../../assets/data/dataProjects";
import { Project } from "./project/Project";

const tabs = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"];

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={tabs} />            
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
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
min-height: 100vh;
background-color: #f5f5f5;    
`
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 38px;    
`

