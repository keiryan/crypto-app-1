import React from "react";
import Searchbox from "../Searchbar/index.js";
import ButtonInfo from "../CreateAccount/index.js";

import { IoMdNotificationsOutline } from "react-icons/io";
import {
  Container,
  NavContainer,
  SearchDiv,
  Wrapper,
  Div,
  Notification,
} from "./index.styles";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <NavContainer>
          <SearchDiv>
            <Searchbox />
          </SearchDiv>
          <Wrapper>
            <ButtonInfo Info="Create a new account" />
            <Div>
              <Notification />
            </Div>
          </Wrapper>
        </NavContainer>
      </Container>
    );
  }
}
export default Navbar;
