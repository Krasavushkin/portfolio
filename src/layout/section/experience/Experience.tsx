import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

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
  display: flex;
  height: 100%;
`
const ExperienceScale = styled.ul `
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 70px 0 140px 0;
  gap: 5px;
  list-style: none;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 75%;
    height: 8px;
    border-radius: 83px;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    top: 50px;
    left: 50%;
    transform: translateX(-50%);

    position: absolute;
  }


`

const Year = styled.li `
  max-width: 260px;
  text-align: center;
  width: 100%;
  height: 100%;
  
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${theme.colors.font};
    top: 40px;
    left: 50%;
    transform: translateX(-50%);

    position: absolute;
  }

`

const YearWork = styled.h3 `
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  max-height: 40px;
  height: 100%;
`

const DescriptionExperience = styled.p `
  text-align: center;
  ${font( {weight: 500, Fmax: 16, Fmin: 10})};
  line-height: normal;
  /*  font-size: 18px;
  font-weight: 500;*/
  margin-top: 45px;
  max-height: 140px;
  height: 100%;
`

