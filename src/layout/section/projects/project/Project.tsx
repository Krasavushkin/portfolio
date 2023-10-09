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
  max-width: 550px;
  max-height: 670px;
  width: 100%;
  height: 100%;
  border-radius: 50px 0;
  border: 1px solid #A39D9D;
  background: #0F1624;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  /*margin-bottom: 60px;*/
`

const Image = styled.img `
  max-width: 500px;
  max-height: 280px;
  width: 100%;
  height: 100%;
  border-radius: 24px 8px 8px 8px;
`

const Title = styled.h3 `
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 90%; 
  margin-top: 40px;
`


const Text = styled.p `
  margin-top: 65px;
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: 500;
`