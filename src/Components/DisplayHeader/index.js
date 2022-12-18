import React from "react";
import { Container, Wrapper } from "./index.styles";

export function PageHeader() {
  return (
    <Container>
      <Wrapper>
        <h2>Main Page</h2>
        <p>Learn about portfolio and investment summary</p>
      </Wrapper>
    </Container>
  );
}

export default function PortfolioHeader() {
  return (
    <Container>
      <Wrapper>
        <h2>Portfolio Mangement</h2>
        <p>Learn about portfolio and investment summary</p>
      </Wrapper>
    </Container>
  );
}
