import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  margin-top: 1rem;
`;
export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  width: 90%;
`;

export const SearchDiv = styled.div`
  display: flex;
  color: #fafbfb;
  flex-direction: row;
  width: 75%;
  box-shadow: 0px 0px 0.5px 0.5px #fafbfb;
  justify-content: space-between;
  @media only screen and (min-width: 1400px) {
    width: 82%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 22%;
  justify-content: space-between;
  @media only screen and (min-width: 1400px) {
    width: 13%;
  }
`;
export const Notification = styled(IoMdNotificationsOutline)`
  font-size: 1.8rem;
  padding-top: 0.2rem;
  color: white;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const Div = styled.div`
  padding: 5px 7px;
  background-color: #ffaf2c;
  border-radius: 8px;
  cursor: pointer;
`;
