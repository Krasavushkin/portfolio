import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


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
               <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"32px"} width={"32px"} iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"32px"} width={"32px"} iconId={"github"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"30px"} width={"35px"} iconId={"telegram"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
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
  gap: 13px;
`
const Portfolio = styled.span `
  color: white;
  font-size: 30px;
`
const SocialList = styled.ul `
  display: flex;
  gap: 25px;
  list-style: none;
`
const SocialItem = styled.li `
    
`
const SocialLink = styled.a `
    
`
