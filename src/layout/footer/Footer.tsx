import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {SocialList} from "../../components/SocialList";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>

                <ConnectItem>
                    <Connect> Call me:<br/>
                        123-456-789
                    </Connect>
                    <Connect> Email: <br/>
                        <Mail> xxx@xyz.com </Mail>
                    </Connect>
                    <SocialList/>
                </ConnectItem>

            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
  max-height: 150px;
  background-color: #0F1624;
  display: flex;
  
`

const Connect = styled.li `
  font-size: 22px;
  font-weight: 600;
`
const ConnectItem = styled.ul `
 display: flex;
  list-style: none;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin: 42px 0 42px 0;
`

const Mail = styled.a `
  cursor: pointer;
`