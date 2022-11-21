import React from "react";
import { Container, Img } from "./index.styles.js";

class ThemeColor extends React.Component {
  render() {
    return (
      <Container onClick={this.props.handleTheme}>
        <Img src="https://cdn3.iconfinder.com/data/icons/fluent-solid-24px-vol-3/24/ic_fluent_dark_theme_24_filled-64.png" />
      </Container>
    );
  }
}
export default ThemeColor;
