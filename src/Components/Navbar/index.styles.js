import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 94%;
  margin-left: 3.1rem;
`;
export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-inline: auto;
  width: 100%;
`;

export const SearchDiv = styled.div`
  display: flex;
  color: #fafbfb;
  flex-direction: row;
  width: 78%;
  margin: 0.8rem 1rem;
  box-shadow: 0px 0px 0.5px 0.5px #fafbfb;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 22%;
  justify-content: space-evenly;
`;
