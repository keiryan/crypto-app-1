import styled from "styled-components";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { AiOutlineFundView } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { VscAccount } from "react-icons/vsc";
import { CgTranscript } from "react-icons/cg";
import { BsStar } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  width: 100%;
  padding-top: 1rem;
`;
export const Div = styled.div`
  text-align: center;
  margin: 0rem 0 1.6rem 0;
  cursor: pointer;
`;
export const StyleMarket = styled(BsFillBarChartFill)`
  color: white;

  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const StyleLogo = styled(SiRedux)`
  color: white;
  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const StyleOverview = styled(AiOutlineFundView)`
  color: white;

  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const StyleWallet = styled(FaWallet)`
  color: white;

  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const StyleNews = styled(HiOutlineNewspaper)`
  color: white;

  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const Title = styled.p`
  color: white;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: green;
  }
`;
export const StyleAccount = styled(VscAccount)`
  color: white;
  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const StyleTransaction = styled(CgTranscript)`
  color: white;
  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const StylePortfolio = styled(BsStar)`
  color: white;
  font-size: 27px;
  &:hover {
    color: green;
  }
`;
export const StyleSetting = styled(IoSettingsOutline)`
  color: white;
  font-size: 27px;
  &:hover {
    color: green;
  }
`;
