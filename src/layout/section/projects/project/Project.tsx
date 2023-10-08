import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Title> {props.title} </Title>
            <Text> {props.text}</Text>
            <Button> Look It Up </Button>
        </StyledProject>
    );
};

const StyledProject = styled.div `
  width: 550px;
  height: 670px;
  border-radius: 50px 0;
  border: 1px solid #A39D9D;
  background: #0F1624;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  
`

const Image = styled.img `
  width: 500px;
  height: 280px;
  border-radius: 24px 8px 8px 8px;
`

const Title = styled.h3 `
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 88.5%; /* 26.55px */
  margin-top: 40px;
`



const Line = styled.img `
  width: 300px;
  height: 4px;
  border-radius: 83px;
  
`

const Text = styled.p `
  margin-top: 65px;
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: 500;
`