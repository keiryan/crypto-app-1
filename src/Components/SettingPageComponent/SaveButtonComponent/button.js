import React from "react";
import { Container, Div } from "./button.styles";
import ButtonInfo from "../../CreateAccount";
export default function SubmitDetailsButton() {
  return (
    <Container>
      <Div>
        <h3>Changes Details</h3>
        <p>Learn about project and status</p>
      </Div>
      <Div>
        <ButtonInfo Info="Save Details" />
      </Div>
    </Container>
  );
}
