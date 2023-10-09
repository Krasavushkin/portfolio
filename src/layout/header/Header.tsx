import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/SocialList";


const items = ["Projects", "Technologies", "About me"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
            <PortfolioList>
                <Logo/>
                <Portfolio> Portfolio </Portfolio>
            </PortfolioList>
            <Menu menuItems={items}/>
               <SocialList />
            </FlexWrapper>
            </Container>
        </ StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: #0F1624;
  position: fixed;
  padding: 10px 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
const PortfolioList = styled.div `
  display: flex;
  gap: clamp(0.625rem, -0.966rem + 7.95vw, 5rem); // max 80px min 10px
`
const Portfolio = styled.span `
  font-size: 30px;
`
