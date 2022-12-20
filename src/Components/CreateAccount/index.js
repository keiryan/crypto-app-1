import React from "react";
import { Container, PTag } from "./index.styles";

class ButtonInfo extends React.Component {
  render() {
    return (
      <Container>
        <PTag>{this.props.Info}</PTag>
      </Container>
    );
  }
}
export default ButtonInfo;
