import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import Project1 from "../../../assets/images/google1.webp"
import Project2 from "../../../assets/images/google2.webp"
import Project3 from "../../../assets/images/google3.webp"
import Project4 from "../../../assets/images/google4.webp"
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>

                <SectionTitle> Projects </SectionTitle>
                <ProjectsTable>

                    <Project
                        src={Project1}
                        title={"PROJECT 1"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />
                    <Project
                        src={Project2}
                        title={"PROJECT 2"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />
                    <Project
                        src={Project3}
                        title={"PROJECT 3"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />
                    <Project
                        src={Project4}
                        title={"PROJECT 4"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />

                </ProjectsTable>

            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  
  
`

const ProjectsTable = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 550px);
  grid-template-rows:  repeat(2, 670px);
  column-gap: 42px;
  row-gap: 60px;
  max-width: 1170px;
  min-height: 1600px;
  right: 0;
  justify-content: space-between;
`