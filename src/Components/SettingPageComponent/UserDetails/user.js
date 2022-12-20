import React from "react";
import {
  Container,
  Div,
  StyleMyDetails,
  StyleProfile,
  StyleNotification,
  StylePassword,
  StyleTeam,
  StyleBiling,
  Title,
} from "./user.styles";

class UserDetails extends React.Component {
  render() {
    return (
      <Container>
        <Div>
          <StyleMyDetails />
          <Title>My Details</Title>
        </Div>
        <Div>
          <StyleProfile />
          <Title>Profile</Title>
        </Div>
        <Div>
          <StylePassword />
          <Title>Password</Title>
        </Div>
        <Div>
          <StyleNotification />
          <Title>Notification</Title>
        </Div>
        <Div>
          <StyleTeam />
          <Title>Team</Title>
        </Div>
        <Div>
          <StyleBiling />
          <Title>Biling</Title>
        </Div>
      </Container>
    );
  }
}
export default UserDetails;
