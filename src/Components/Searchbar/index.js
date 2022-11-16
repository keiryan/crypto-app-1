import React from "react";
import { Container, Input } from "./index.styles.js";

class Searchbox extends React.Component {
  render() {
    return (
      <Container>
        <form>
          <Input placeholder="Search..." />
        </form>
      </Container>
    );
  }
}
export default Searchbox;
