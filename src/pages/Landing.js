import React from "react";
import styled from "styled-components";
import {
  setColor,
  setFlex,
  setFont,
  transition,
  letterSpacing,
} from "../components/global/helper";
import { Link } from "react-router-dom";
// import Button from "../components/UI/Button";
const Landing = () => {
  return (
    <Wrapper>
      <Btn to="/player">Player</Btn>
      <h1>Landing Page</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  ${setFlex};

  h1 {
    ${setFont.title};
    color: ${setColor.mainWhite};
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.4);
  }
`;

const Btn = styled(Link)`
  border: 1px solid ${setColor.mainWhite};
  font-size: 2.4rem;
  ${letterSpacing(2)};
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  ${setFont.main};
  padding: 0.8rem 2.4rem;
  margin: 0.8rem;
  cursor: pointer;
  ${transition};
  border-radius: 0.8rem;
  &:active {
    transform: scale(0.95);
  }
`;

export default Landing;
