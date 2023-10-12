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

                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"50px"} margin={"0 0 140px 0"}>
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
                </FlexWrapper>

            </Container>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  display: flex;
  height: 100%;
  /*padding-bottom: 100px;*/
`

