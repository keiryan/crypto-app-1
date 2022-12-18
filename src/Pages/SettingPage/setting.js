import React from "react";
import PortfolioHeader from "../../Components/DisplayHeader";
import UserDetails from "../../Components/SettingPageComponent/UserDetails/user";
import InputBox from "../../Components/SettingPageComponent/InputComponent/input";
import SubmitDetailsButton from "../../Components/SettingPageComponent/SaveButtonComponent/button";
import UpdateDetails from "../../Components/SettingPageComponent/UpdateEmailPassword/update";
import {
  Container,
  SubCointainer,
  Header,
  LeftWrapper,
  RightWrapper,
} from "./setting.styles.js";
class Setting extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <PortfolioHeader />
        </Header>
        <SubCointainer>
          <LeftWrapper>
            <InputBox />
            <UserDetails />
          </LeftWrapper>
          <RightWrapper>
            <SubmitDetailsButton />
            <UpdateDetails />
          </RightWrapper>
        </SubCointainer>
      </Container>
    );
  }
}
export default Setting;
