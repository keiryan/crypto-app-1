import React from "react";
import { Container, Searchbox } from "./input.styles";

class InputBox extends React.Component {
  render() {
    return (
      <Container>
        <Searchbox placeholder="Search..." />
      </Container>
    );
  }
}
export default InputBox;
