import styled from "styled-components";
export const Container = styled.div`
  /* border: 3px solid blue; */
  height: 100vh;
  min-width: 750px;
  min-height: 800px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(props) => (props.themeColor ? "#fcfcfc" : "#1f2128")};
`;
