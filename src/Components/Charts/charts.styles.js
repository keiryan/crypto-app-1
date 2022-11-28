import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid blue; */
  height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ChartContainer = styled.div`
  border: 1px solid green;
  height: 260px;
  min-width: 480px;
  border-radius: 5px;
  display: flex;
  position: relative;
`;
export const MainContainer = styled.div`
  /* border: 1px solid blue; */
  width: 68%;
  min-width: 950px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Wrapper = styled.div`
  left: 2%;
  height: 100px;
  position: absolute;
  margin-top: 1rem;
  font-family: Helvetica, sans-serif;
`;
export const Div = styled.div`
  /* border: 1px solid yellow; */
  width: 420px;
  height: 210px;
  position: absolute;
  bottom: 0%;
  right: 5%;
`;
export const Price = styled.p`
  /* border: 1px solid blue; */
  padding: 2px 6px;
  color: white;
  font-size: 22px;
`;

export const Date = styled.p`
  /* border: 1px solid yellow; */
  padding: 2px 6px;
  color: white;
  font-size: 17px;
`;
export const P = styled.p`
  /* border: 1px solid white; */
  color: white;
  padding: 1px 6px;
  font-size: 14px;
`;
