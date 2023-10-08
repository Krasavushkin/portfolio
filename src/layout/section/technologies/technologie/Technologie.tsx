import React from 'react';
import styled from "styled-components";


type TechnologiePropsType = {
    width?: number
}
export const Technologie = ({width = 20}: TechnologiePropsType) => {
    return (

        <StyledTechnologie>
            <SkillScale width={width} />
        </StyledTechnologie>
    );
};

const StyledTechnologie = styled.div `
  width: 900px;
  background-color: #162950;
  border-radius: 83px;
  height: 17px;
`

const SkillScale = styled.div<{width: number}>`
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  border-radius: 83px;
  position: relative;
  width:  ${props => props.width}%;
  height: 17px;
  
`