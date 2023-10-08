import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import avatar from "../../../assets/images/avatar.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <div>
                    <Name> Lorem ipsum dolor amet </Name>
                    <MainTitle> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.
                    </MainTitle>
                    <Button> Let's Begin </Button>
                </div>
                <Photo src={avatar} alt=" "/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section `
  min-height: 100vh;
  display: flex;
`
const MainTitle = styled.h1 `
  color: ${theme.colors.fontTitle};
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 60px;
`
const Name = styled.h2 `
  font-size: 54px;
  font-weight: 600;
`
const Photo = styled.img `
  width: 380px;
  height: 450px;
  border-radius: 50px 0px;
  border: 5px solid #8643DC;
  background: lightgray 50% / cover no-repeat;
`