import styled from "styled-components";
export const Container = styled.div`
  /* border: 3px solid green; */
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1f2128;
  /* background-color: ${(props) =>
    props.themeColor ? "#fcfcfc" : "#1f2128"}; */
`;

export const Wrapper = styled.div`
  /* border: solid blue; */
  width: 94%;
`;
export const Nav = styled.nav`
  /* border: solid yellow; */
  width: 6%;
  background-color: #111111;
`;
