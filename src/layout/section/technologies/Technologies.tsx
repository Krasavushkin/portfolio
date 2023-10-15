import React from 'react';
import styled from "styled-components";
import {Technologie} from "./technologie/Technologie";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import git from "../../../assets/images/skill-icons_git.png"
import Vector from "../../../assets/images/Vector.png"
import figma from "../../../assets/images/figma.png"
import {Container} from "../../../components/Container";
import {Experience} from "../experience/Experience";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Technologies = () => {
    return (

        <TechnologiesStyled>
            <Container>

                <SectionTitle> Technologies </SectionTitle>
                <FlexWrapper justify={"center"}>
                <TechnologiesWrapper>
                    <Name> Html </Name>
                    <Technologie width={75}/>
                    <Name> Css, Sass </Name>
                    <Technologie width={67.5}/>
                    <Name> React </Name>
                    <Technologie width={55}/>
                    <Name> Styled components </Name>
                    <Technologie width={67.5}/>
                    <TechnologiesTitle> Additional technologies and skills </TechnologiesTitle>
                    <Additional>
                        <TechnologieIcon src={git} alt=" "/>
                        <TechnologieIcon src={Vector} alt=" "/>
                        <TechnologieIcon src={figma} alt=""/>
                    </Additional>
                </TechnologiesWrapper>
                </FlexWrapper>


            </Container>
        </TechnologiesStyled>

    );
};

const TechnologiesStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

`
const TechnologiesWrapper = styled.div`
  display: grid ;
  max-width: 940px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

`
const Name = styled.h3`
  color: white;
/*  font-size: 26px;
  font-weight: 600;*/
  margin: 35px 0 5px 25px;
  ${font( {weight: 600, color: theme.colors.font, Fmax: 22, Fmin: 16})};

`

const TechnologiesTitle = styled.span `
  max-width: 900px;
  width: 100%;
  margin-top: 120px;/*clamp(1.875rem, -0.17rem + 10.23vw, 7.5rem); *///min 30px max 120px
  text-align: center;
  ${font( {weight: 600, color: theme.colors.font, Fmax: 38, Fmin: 24})}
 
`

const Additional = styled.ul `
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 80px 0 170px 0;
 
`

const TechnologieIcon = styled.img `
  
  @media ${theme.media.mobile} {

    width: 50px;
    height: 50px;
  }

`