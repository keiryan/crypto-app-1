import styled from "styled-components";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { AiOutlineFundView } from "react-icons/ai";
import { SiRedux } from "react-icons/si";

export const Container = styled.div`
  width: 100%;
`;
export const Div = styled.div`
  text-align: center;
  margin: 1rem 0 2.5rem 0;
  cursor: pointer;
`;
export const StyleMarket = styled(BsFillBarChartFill)`
  color: white;

  font-size: 30px;
  &:hover {
    color: green;
  }
`;
export const StyleLogo = styled(SiRedux)`
  color: white;

  font-size: 30px;
  &:hover {
    color: green;
  }
`;
export const StyleOverview = styled(AiOutlineFundView)`
  color: white;

  font-size: 30px;
  &:hover {
    color: green;
  }
`;
export const StyleWallet = styled(FaWallet)`
  color: white;

  font-size: 30px;
  &:hover {
    color: green;
  }
`;
export const StyleNews = styled(HiOutlineNewspaper)`
  color: white;

  font-size: 30px;
  &:hover {
    color: green;
  }
`;
export const Title = styled.p`
  color: white;
  font-size: 13px;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;
