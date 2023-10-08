import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
            <SectionTitle> Experience </SectionTitle>

                <ExperienceScale>
                <Year>
                    <YearWork> 2017 </YearWork>
                    <DescriptionExperience>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</DescriptionExperience>
                </Year>

                <Year>
                    <YearWork> 2019 </YearWork>
                    <DescriptionExperience>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin.</DescriptionExperience>
                </Year>

                <Year>
                    <YearWork> 2021 </YearWork>
                    <DescriptionExperience>Lorem ipsum dolor met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  et dolore magna aliqua.</DescriptionExperience>
                </Year>

                <Year>
                    <YearWork> 2023 </YearWork>
                    <DescriptionExperience>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DescriptionExperience>
                </Year>
            </ExperienceScale>
            </Container>
        </StyledExperience>
    );
};

const StyledExperience = styled.section `
  /*display: flex;*/
`
const ExperienceScale = styled.ul `
  justify-content: space-between;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  margin: 70px 0 140px 0;
  gap: 20px;
  list-style: none;
  
`

const Year = styled.li `
  width: 260px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  
  
  position: relative;


  &::after {
    content: '!';
    padding: 0;
    font-size: 10rem;
    position: absolute;
    top: 10px;
  }

`

const YearWork = styled.h3 `
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  
`

const DescriptionExperience = styled.p `
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 45px;

`

