import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import avatar from "../../../assets/images/avatar.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <StyledMainTitle>
                    <Name> Lorem ipsum dolor amet </Name>
                    <MainTitle> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.
                    </MainTitle>
                    <Button> Let's Begin </Button>
                </StyledMainTitle>
                <Photo src={avatar} alt=" "/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section `
  display: flex;
  height: 100%;
  padding: 125px 0;

 
`

const StyledMainTitle = styled.div `
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    width: 666px;
    height: 666px;
    z-index: 2;
    background-image: url("drawing1.png") ;
 
   


    position: absolute;
  }

`


const MainTitle = styled.h1 `
  color: ${theme.colors.fontTitle};
  font-size: 18px;
  font-weight: 500;
  margin: 15px 0 60px 0;
  

`
const Name = styled.h2 `
  font-size: 54px;
  font-weight: 600;
`
const Photo = styled.img `
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0px;
  border: 5px solid #8643DC;
  background: lightgray 50% / cover no-repeat;

 



`