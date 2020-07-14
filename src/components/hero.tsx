import React from "react";
import styled from "@emotion/styled";

export default function hero() {
  return (
    <Section>
      <div>
        <span>
          The office of
          <br /> Dr. Flavio Cajiao
        </span>
      </div>
    </Section>
  );
}

const Section = styled("section")`
  min-width: 100vw;
  min-height: 65vh;
  background-color: var(--granny-smith-green);
  display: flex;
  justify-content: center;
  div {
    width: calc(100vw - 4rem);
    max-width: 64rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      font-family: "Chivo";
      font-weight: 900;
      font-size: 3em;
      text-align: right;
      line-height: 1;
      text-transform: uppercase;
    }
  }
`;
