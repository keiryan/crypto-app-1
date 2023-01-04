import React from "react";
import { Container, PTag } from "./index.styles";

const ButtonInfo = (props) => {
  return (
    <Container>
      <PTag>{props.Info}</PTag>
    </Container>
  );
};
export default ButtonInfo;
