import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import avatar from "../../../assets/images/avatar.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import {font} from "../../../styles/Common";
export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                <StyledMainTitle>
                    <Name> Lorem ipsum dolor amet </Name>
                    <MainTitle> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.
                    </MainTitle>
                    <MainButton> Let's Begin </MainButton>
                </StyledMainTitle>
                <PhotoWrapper>
                <Photo src={avatar} alt=" "/>
                </PhotoWrapper>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section `
  display: flex;
  height: 100%;
  padding: 225px 0 125px 0;
   
`

const StyledMainTitle = styled.div `
  
  max-width: 675px;
  width: 100%;
  margin: 0 auto;
  
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    width: 666px;
    height: 666px;
    z-index: 30;
    background: url("drawing.svg") ;
  
    position: absolute;
  }

`

const MainTitle = styled.h1 `
  ${font( {weight: 500, color: theme.colors.fontTitle, Fmax: 18, Fmin: 10})}
  margin: 15px 0 60px 0;
  
`
const MainButton = styled.button `
  width: 240px;
  height: 60px;
  border-radius: 83px;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #FFF;
  cursor: pointer;
  margin: 15px auto;

`

const Name = styled.h2 `
  ${font( {weight: 600, Fmax: 44, Fmin: 36})}

  
`

const PhotoWrapper = styled.div `
  display: flex;
  border-radius: 52px 0px;
  background-image: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  margin: 0 auto;
  
`
const Photo = styled.img `
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0px;
  margin: 5px;

  @media ${theme.media.mobile} {
    
    width: 330px;
    height: 390px;
  }
  
`