import React from "react";
import {
  Container,
  Wrapper,
  Div,
  Info,
  InputDiv,
  Detail,
} from "./update.styles";

const UpdateDetails = () => {
  return (
    <Container>
      <Wrapper>
        <Div>
          <Info>Update Password</Info>
          <Detail>Update password details</Detail>
        </Div>
        <InputDiv>
          <form>
            <label>Old Password</label>
            <input placeholder="Old Password..." />
          </form>
          <form>
            <label>New Password</label>
            <input placeholder="New Password..." />
          </form>
        </InputDiv>
      </Wrapper>
      <Wrapper>
        <Div>
          <Info>Update Email</Info>
          <Detail>Update Email details</Detail>
        </Div>
        <InputDiv>
          <form>
            <label>Old Email Address</label>
            <input placeholder="Old email address..." />
          </form>
          <form>
            <label>New Email Address</label>
            <input placeholder="New email address..." />
          </form>
        </InputDiv>
      </Wrapper>
    </Container>
  );
};
export default UpdateDetails;
