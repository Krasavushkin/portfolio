import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {SocialList} from "../SocialList";

export const Menu = (props: {menuItems: Array <string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item: string, index: number)=>{
                  return <li key={index}>
                      <a href="">{item}</a>
                  </li>
                })}

            </ul>


        </StyledMenu>
    );
};

const StyledMenu = styled.nav `

  
  ul {
    display:flex;
    max-width: 410px;
    width: 100%;
    gap: clamp(0.625rem, -0.966rem + 7.95vw, 5rem);
    justify-content: space-between;
    list-style: none;
   
  }
  
  @media ${theme.media.tablet} {
    display: none;
    
    
  }
  
  a{
    color: white;
    text-decoration: none;
       
  }
  
  
  a:hover {
    color: ${theme.colors.fontTitle};
    text-decoration: underline;
  }
  
`