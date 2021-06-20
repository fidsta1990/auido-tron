import React from "react";
import styled from "styled-components";
import {
  setColor,
  setFlex,
  setFont,
  shadows,
} from "../components/global/helper";
const Player = () => {
  return (
    <Wrapper>
      <h1>Player</h1>
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

export default Player;
