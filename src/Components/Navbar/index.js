import React from "react";
import Searchbox from "../Searchbar/index.js";
import NewAccountInfo from "../CreateAccount/index.js";
import ThemeColor from "../ThemeChanger/index.js";
import { Container, NavContainer, SearchDiv, Wrapper } from "./index.styles";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <NavContainer>
          <SearchDiv>
            <Searchbox />
          </SearchDiv>
          <Wrapper>
            <NewAccountInfo />
            <ThemeColor handleTheme={this.props.handleTheme} />
          </Wrapper>
        </NavContainer>
      </Container>
    );
  }
}
export default Navbar;
