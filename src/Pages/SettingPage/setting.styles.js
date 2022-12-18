import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)``;
export const Container = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  width: 90%;
  margin-inline: auto;
`;
export const SubCointainer = styled.div`
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  box-shadow: 0px 0px 1px 0.5px white;
`;
export const LeftWrapper = styled.div`
  width: 25%;
`;
export const RightWrapper = styled.div`
  width: 70%;
`;
