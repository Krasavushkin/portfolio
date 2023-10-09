import React from 'react';
import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    display?: string
    margin?: string
    gap?: string
    height?: string
}




export const FlexWrapper = styled.div <FlexWrapperPropsType> `
  display: ${props => props.direction || "flex"};
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  margin: ${props => props.margin || "0"};
  gap: ${props => props.gap || "0"};
  height: ${props => props.height || "100%"};
  width: auto;
`
