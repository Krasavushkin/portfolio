import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

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
    gap: 80px;
    justify-content: center;
    list-style: none;
   
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