import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
`;

export const MainContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  justify-content: left;
  padding-left: 4rem;
  max-height: 370px;
  width: 100%;
`;

export const CoinInfoDiv = styled.div`
  margin: 0 0 1rem 0;
  padding-left: 1rem;
`;
export const ChartContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
  padding: 1rem;
  width: 67%;
  max-height: 450px;
`;
export const IndicatorContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);

  width: 30%;
`;
