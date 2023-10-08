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

export const Technologies = () => {
    return (

        <TechnologiesStyled>
            <Container>

                <SectionTitle> Technologies </SectionTitle>

                <TechnologieWrapper>
                    <Name> HTML </Name>
                    <Technologie width={75}/>
                    <Name> CSS, Sass </Name>
                    <Technologie width={67.5}/>
                    <Name> React </Name>
                    <Technologie width={55}/>
                    <Name> Styled component </Name>
                    <Technologie width={67.5}/>
                    <SectionTitle> Additional technologies and skills </SectionTitle>
                    <Additional>
                        <TechnologieIcon src={git} alt=" "/>
                        <TechnologieIcon src={Vector} alt=" "/>
                        <TechnologieIcon src={figma} alt=""/>
                    </Additional>
                </TechnologieWrapper>



            </Container>
        </TechnologiesStyled>

    );
};

const TechnologiesStyled = styled.section`
  display: flex;
  justify-content: center;

`
const TechnologieWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 70px;
  

`
const Name = styled.h3`
  color: white;
  margin: 20px 15px;
  font-size: 26px;
  font-weight: 600;

`
const Additional = styled.ul `
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 70px 0 170px 0;
 
`

const TechnologieIcon = styled.img `

`