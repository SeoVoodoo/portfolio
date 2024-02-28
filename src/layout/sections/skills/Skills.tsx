import React from "react";
import { Skill } from "./skill/Skill";
import { useCallback, useEffect, useState } from "react";
import { Container } from "../../../conponents/Container";
import { S } from "./Skills_Style";




export const Skills: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const onChangeWindowSize = useCallback(() => {
        const query = window.matchMedia('(min-width: 481px) and (max-width: 768px)');

        if (query.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onChangeWindowSize);

        return () => {
            window.removeEventListener('resize',onChangeWindowSize )
        }
    }, [])

    const skillData = [

        {
            id: "photoshop", 
            width: isSmallScreen ? "95" : "70",
            height: isSmallScreen ? "95" : "70",
            viewBox: isSmallScreen ? "3 3 33 33" : "3 3 38 38",
            text: "Photoshop"
        },
        {
            id: "afterEffects", 
            width: isSmallScreen ? "95" : "70",
            height: isSmallScreen ? "95" : "70",
            viewBox: isSmallScreen ? "3 3 33 33" : "3 3 38 38",
            text: "After Effects"
        },
        {
            id: "illustrator", 
            width: isSmallScreen ? "95" : "70",
            height: isSmallScreen ? "95" : "70",
            viewBox: isSmallScreen ? "3 3 33 33" : "3 3 38 38",
            text: "Illustrator"
        },
        {
            id: "figma", 
            width: isSmallScreen ? "95" : "70",
            height: isSmallScreen ? "95" : "70",
            viewBox: isSmallScreen ? "-2 -1 45 45" : "-1 -1 44 44",
            text: "Figma"
        }

    ]

    return (
        <S.Skills>
            <Container>  
                <S.WrapSkills> 

                    {skillData.map((scill, index) => {
                        return <Skill 
                                    key={index}
                                    id={scill.id}
                                    width={scill.width} 
                                    height={scill.height}  
                                    viewBox={scill.viewBox} 
                                    text={scill.text}                              
                                />
                    })}         
                    {/* <Skill 
                        id={"photoshop"} 
                        width={isSmallScreen ? "95" : "70"} 
                        height={isSmallScreen ? "95" : "70"} 
                        viewBox={isSmallScreen ? "3 3 33 33" : "3 3 38 38"}
                        text={"Photoshop"}
                    />
                    <Skill 
                        id={"afterEffects"} 
                        width={isSmallScreen ? "95" : "70"} 
                        height={isSmallScreen ? "95" : "70"} 
                        viewBox={isSmallScreen ? "3 3 33 33" : "3 3 38 38"}
                        text={"After Effects"}
                    />
                    <Skill 
                        id={"illustrator"} 
                        width={isSmallScreen ? "95" : "70"} 
                        height={isSmallScreen ? "95" : "70"} 
                        viewBox={isSmallScreen ? "3 3 33 33" : "3 3 38 38"}
                        text={"Illustrator"}
                    />
                    <Skill 
                        id={"figma"} 
                        width={isSmallScreen ? "95" : "70"} 
                        height={isSmallScreen ? "95" : "70"} 
                        viewBox={isSmallScreen ? "-2 -1 45 45" : "-1 -1 44 44"}
                        text={"Figma"}
                    /> */}
                </S.WrapSkills>
            </Container>            
        </S.Skills>
    );
};


