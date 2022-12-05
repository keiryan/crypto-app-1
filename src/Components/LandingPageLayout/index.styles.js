import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export const Container = styled.div`
  margin: 0 auto;
  color: white;
`;
export const TableDiv = styled.div`
  color: "#fafbfb";
  display: flex;
  justify-content: center;

  width: 90%;
  margin-inline: auto;
`;
export const TableHeader = styled.th`
  padding: 8px 0px;
  text-shadow: 0.5px 0.5px 0px rgba(255, 255, 255, 0.2);
`;
export const TableRow = styled.tr``;
export const Table = styled.table`
  width: 100%;
  color: white;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
`;
export const TableData = styled.td`
  padding: 15px;
`;
export const TableProgressChart = styled.td`
  padding: 4px 10px;
`;
export const CoinImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled.div`
  font-size: 14px;
`;
export const Progress = styled.progress`
  width: 180px;
`;
export const DivProgressBar = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: green;
`;
export const SparklineDiv = styled.div`
  width: 70px;
`;
export const Hr = styled.hr`
  color: white;
  width: 100%;
  display: block;
`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.div``;
export const WrapperContainer = styled.div`
  margin-bottom: 2.5rem;
`;
export const MainWrapper = styled.div``;
export const StyledArrowUp = styled(FaAngleUp)`
  color: rgba(255, 255, 255, 0.9);
  /* border: solid green; */
  padding-top: 0.8rem;
  font-size: 1.5rem;
`;
export const StyledArrowDown = styled(FaAngleDown)`
  color: rgba(255, 255, 255, 0.9);
  padding-top: 0.8rem;
  font-size: 1.5rem;
`;
