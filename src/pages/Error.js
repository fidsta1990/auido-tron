import React from "react";
import styled from "styled-components";
import { setFlex } from "../components/global/helper";
const Error = () => {
  return <Wrapper>Error</Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  ${setFlex};
`;

export default Error;
