import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/SocialList";
import {MobileMenu} from "./mobileMenu";


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
                <MobileMenu menuItems={items}/>
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
  gap: 15px;
  padding: 30px 0;
`
const Portfolio = styled.span `
  font-size: 30px;
  
`
