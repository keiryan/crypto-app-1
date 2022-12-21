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

  width: 100%;
  margin-inline: auto;
`;

export const CoinInfoDiv = styled.div`
  margin: 0 0 1rem 0;
  padding-left: 1rem;
`;
export const ChartContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
  padding: 1rem;
  width: 67%;
`;
export const IndicatorContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
  padding: 0.5rem 1rem;
  position: relative;
  width: 30%;
  font-family: Arial, Helvetica, sans-serif;
`;
export const PieInfo = styled.p`
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  font-size: 1.1rem;
`;
export const GreedFigure = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;

  color: rgba(255, 255, 255, 0.9);
  transform: translate(-50%, -50%);
  h2 {
    font-size: 2.5rem;
  }
`;
export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: absolute;
  width: 100%;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, 0%);
  li {
    padding: 3px;
    list-style: none;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
  }
`;
