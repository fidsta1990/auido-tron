import React from "react";
import styled from "styled-components";
import { setColor, letterSpacing, setFont, transition } from "../global/helper";
const Button = (props) => {
  return <Wrapper type={props.type}>{props.children}</Wrapper>;
};

const Wrapper = styled.button`
  border: 1px solid ${setColor.mainWhite};
  font-size: 2.4rem;
  ${letterSpacing(2)};
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  ${setFont.main};
  padding: 0.8rem 2.4rem;
  margin: 0.8rem;
  cursor: pointer;
  ${transition};

  &:active {
    transform: scale(0.95);
  }
`;
export default Button;
