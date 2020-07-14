import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Nav from "./nav";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>
          <Link to="/">Dr. Flavio Cajiao</Link>
        </h1>
        <Nav />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled("header")`
  background-color: hsl(60, 30%, 96%);
  min-height: 70px;
  top: 0;
  position: sticky;
  z-index: 2;
  display: flex;
  justify-content: center;
  div {
    width: calc(100vw - 4rem);
    max-width: 64rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2rem;
      margin: 0;
      a {
        color: hsl(0, 0%, 0%);
        text-decoration: none;
      }
    }
  }
`;
