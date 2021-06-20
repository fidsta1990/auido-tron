import React from "react";
import styled from "styled-components";
import { setColor } from "../global/helper";
const Layout = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.main`
  background: ${setColor.mainGrey};
`;

export default Layout;
