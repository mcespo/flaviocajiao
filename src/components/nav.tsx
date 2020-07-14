import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

export default function Nav() {
  return (
    <StyledNav>
      {/* <Link to="/">About</Link>
      <Link to="/">Services</Link>
      <Link to="/">Contact</Link> */}
      <a href="tel:1-872-256-5966">(872) 256-5966</a>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  a:not(:last-of-type) {
    margin-right: 1em;
  }
`;
