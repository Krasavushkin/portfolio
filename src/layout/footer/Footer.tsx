import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Connect> Call me:<br/>
                        123-456-789
                    </Connect>

                    <Connect> Email: <br/>
                        xxx@xyz.com
                    </Connect>

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
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
  min-height: 150px;
  background-color: #0F1624;
  display: flex;
  
  
`

const Connect = styled.p `
  font-size: 22px;
  font-weight: 600;
`

const SocialList = styled.ul `
  display: flex;
  gap: 25px;
  list-style: none;
`
const SocialItem = styled.li `
    
`
const SocialLink = styled.a `
    cursor: pointer;
    
`