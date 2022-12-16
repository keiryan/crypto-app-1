import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export const TableDiv = styled.div`
  color: "#fafbfb";
  display: flex;
  justify-content: center;
  width: 90%;
  margin-inline: auto;
`;
export const TableHeader = styled.th`
  width: fit-content;
  font-size: 0.9rem;
  padding: 1rem 0.5rem 1rem 0;
  text-align: center;
  text-shadow: 0.5px 0.5px 0px rgba(255, 255, 255, 0.2);
`;
export const TableRow = styled.tr`
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
export const Table = styled.table`
  color: white;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
`;
export const TableData = styled.td`
  padding: 15px 18px;
  font-size: 0.9rem;
  align-items: center;
`;
export const TableProgressChart = styled.td`
  padding: 4px 10px;
`;
export const CoinImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 9px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled.div`
  font-size: 14px;
`;

export const DivProgressBar = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: green;
`;
export const MainProgressBar = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 10px;
  border-radius: 5px;
`;
export const SparklineDiv = styled.div`
  width: 100px;
`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
`;
export const Icon = styled.div``;
export const WrapperContainer = styled.div`
  margin-bottom: 2.5rem;
`;
export const MainWrapper = styled.div``;
export const StyledArrowUp = styled(FaAngleUp)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin: 3px 3px 0;
`;
export const StyledArrowDown = styled(FaAngleDown)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin: 3px 3px 0 0;
`;
export const Figure = styled.span`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.element > 0 ? "#08c320" : "#c21a1f")};
  ${StyledArrowUp} {
    color: ${(props) => (props.element > 0 ? "#08c320" : "#c21a1f")};
  }
  ${StyledArrowDown} {
    color: ${(props) => (props.element > 0 ? "#08c320" : "#c21a1f")};
  }
`;
