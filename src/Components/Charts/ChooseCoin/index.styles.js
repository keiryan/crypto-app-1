import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
export const Wrapper = styled.div`
  width: 95%;
  align-items: center;

  display: flex;
  position: relative;

  justify-content: space-between;
`;
export const CoinLogo = styled.div``;
export const CoinSelection = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Helvetica, sans-serif;
  align-items: center;

  padding: 12px;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
`;
export const NestedList = styled.div`
  position: absolute;
  top: 108%;
  width: 105px;

  ul {
    box-shadow: 0px 0px 2px 2px #272735;
  }
  li {
    color: rgba(255, 255, 255, 0.6);
    list-style: none;
    background-color: #111111;
    text-align: center;
    padding: 3px 5px;
    font-family: Arial, Helvetica, sans-serif;
    &:hover {
      background-color: #2b2d42;
      color: black;
    }
  }
`;
export const CoinDisplayType = styled.div`
  display: flex;
  background-color: #272727;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-right: 2rem;
  border-radius: 5px;
`;
export const TimeDiv = styled.div`
  padding: 12px;
  flex-direction: row;
  display: flex;
  border-radius: 5px;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 2px 2px #272735;
`;
export const InnerDiv = styled.div`
  display: flex;
`;
export const Info = styled.p`
  margin-right: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;
export const TableNavbar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const NestedDiv = styled.div`
  display: flex;
`;

export const NestedTimeList = styled.div`
  position: absolute;
  top: 102%;
  left: 0%;
  width: 108px;

  ul {
    box-shadow: 0px 0px 1px 1px #2b2d42;
  }
  li {
    color: rgba(255, 255, 255, 0.6);
    list-style: none;
    text-align: center;
    padding: 4px 0px 4px 10px;
    background-color: #111111;
    font-family: Arial, Helvetica, sans-serif;

    &:hover {
      background-color: #2b2d42;
      color: black;
    }
  }
`;
export const NestedDataList = styled.div`
  position: absolute;
  top: 102%;
  left: 1%;
  width: 125px;
  ul {
    box-shadow: 0px 0px 1px 1px #2b2d42;
  }
  li {
    color: rgba(255, 255, 255, 0.6);
    list-style: none;
    text-align: center;
    padding: 4px 0px 4px 10px;
    background-color: #111111;
    font-family: Arial, Helvetica, sans-serif;
    &:hover {
      background-color: #2b2d42;
    }
  }
`;
export const Div = styled.div`
  position: relative;
`;
export const Styledarrow = styled(FaAngleDown)`
  color: green;
`;
