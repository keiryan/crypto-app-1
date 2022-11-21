import React from "react";
import Coins from "./../Coins/index.js";
import Portfolio from "../Portfolio/index.js";
import Searchbox from "../Searchbar/index.js";
import CurrencySelector from "../CurrencyChange/index.js";
import ThemeColor from "../ThemeChanger/index.js";
import {
  Container,
  NavContainer,
  LeftNav,
  RightNav,
  LinkStyled,
} from "./index.styles";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <NavContainer>
          <LeftNav>
            <LinkStyled to="/">
              <Coins />
            </LinkStyled>
            <LinkStyled to="portfolio">
              <Portfolio />
            </LinkStyled>
          </LeftNav>
          <RightNav>
            <Searchbox />
            <CurrencySelector />
            <ThemeColor handleTheme={this.props.handleTheme} />
          </RightNav>
        </NavContainer>
      </Container>
    );
  }
}
export default Navbar;
