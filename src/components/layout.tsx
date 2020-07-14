/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import { injectGlobal } from "emotion";
import emotionReset from "emotion-reset";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

injectGlobal`
  ${emotionReset}

 /* Colors ======================================================= */
:root {
  --granny-smith-green: hsl(99, 72%, 80%);
  --hunter-green: hsl(120, 16%, 33%);
  --dark-blue-gray: hsl(239, 26%, 50%);
  --ocean-blue: hsl(239, 54%, 52%);
  --midnight-purple: hsl(299, 100%, 21%);
  --raisin-black: hsl(240, 5%, 12%);
  --powder-white: hsl(60, 30%, 96%);
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  background-color: var(--powder-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--raisin-black);
  font-family: "Overpass", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Chivo";
  font-weight: 900;
}

h2 {
  font-size: 1.5rem;
}

b, strong {
  font-weight: 700;
}

i, em {
  font-style: italic;
}

p {
  font-size: 1.15rem;
  margin: 0.25rem 0 0.75rem;
  max-width: 75ch;
}

`;

const Container = styled("div")`
  min-width: 100vw;
  display: flex;
  justify-content: center;
  main {
    width: calc(100vw - 4rem);
    max-width: 64rem;
    section {
      margin: 3em 0;
    }
  }
`;
