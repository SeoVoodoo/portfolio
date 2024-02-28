import React, { useState } from "react";
import { SectionTitle } from "../../../conponents/SectionTitle";
import { projectsData } from "../../../assets/data/projectsData";
import { Project } from "./project/Project";
import { Container } from "../../../conponents/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { S } from "./Projects_Styles";
import { AnimatePresence, motion } from "framer-motion"



// const tabs = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"];

const tabs: Array<{status: TabsStatusType, title:string}> = [
    {
        title: "Story",
        status: "story" 
    },
    {
        title: "Post",
        status: "post" 
    },
    {
        title: "Banner",
        status: "banner" 
    },
    {
        title: "Trailer",
        status: "trailer" 
    },
    {
        title: "Desighn",
        status: "desighn" 
    },
    {
        title: "More",
        status: "more" 
    },
]

export const Projects: React.FC = () => {
    const [curentFilterStatus, setCurentFilterStatus] = useState("story");
    let filteredProjects = projectsData;

    switch(curentFilterStatus){
        case "post": 
            filteredProjects = projectsData.filter(project => project.type === "post"); 
            break;

        case "banner": 
            filteredProjects = projectsData.filter(project => project.type === "banner"); 
            break;

        case "trailer": 
            filteredProjects = projectsData.filter(project => project.type === "trailer"); 
            break;

        case "desighn": 
            filteredProjects = projectsData.filter(project => project.type === "desighn"); 
            break;  

        case "more": 
            filteredProjects = projectsData.filter(project => project.type === "more"); 
            break;

        default:
            filteredProjects = projectsData.filter(project => project.type === "story");        
    }

    function changeFilterStatus (value: TabsStatusType) {
        setCurentFilterStatus(value);
    }

    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu 
                    tabsItems={tabs} 
                    changeFilterStatus={changeFilterStatus}
                    curentFilterStatus={curentFilterStatus}
                />            
                    <S.List>
                        <AnimatePresence>
                            {filteredProjects.map(project => { 

                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }} 
                                        key={project.idProject}                                   
                                    >
                                    <li key={project.idProject} style={{height: '100%'}}>
                                        
                                            <Project                                                              
                                                src={project.src}
                                                title={project.title}                            
                                            />
                                        
                                    </li>
                                    </motion.div>
                                ) 
                            })} 
                        </AnimatePresence>                  
                    </S.List>   
            </Container>                     
        </S.Projects>        
    );
};



