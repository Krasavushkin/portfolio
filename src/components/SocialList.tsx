import React from 'react';
import {Icon} from "./icon/Icon";
import styled from "styled-components";

export const SocialList = () => {
    return (
            <StyledSocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"34px"} width={"34px"} iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"34px"} width={"34px"} iconId={"github"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"34px"} width={"34px"} iconId={"telegram"}/>
                    </SocialLink>
                </SocialItem>
            </StyledSocialList>
    );
};
/*

const StyledSocialList = styled.div `

`
*/

const StyledSocialList = styled.ul `
  display: flex;
  box-sizing: border-box;
  gap: 25px;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  
`
const SocialItem = styled.li `
  padding-top: 10px;
`
const SocialLink = styled.a `
    
`
