import React from "react";
import styled from "@emotion/styled";

export default function footer() {
  return <Footer>© {new Date().getFullYear()}, Dr Flavio Cajiao</Footer>;
}

const Footer = styled("footer")`
  text-align: center;
  min-width: 100vw;
  min-height: 5em;
  background-color: var(--dark-blue-gray);
  color: var(--powder-white);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: calc(100vw - 4rem);
    max-width: 64rem;
  }
`;
