import React from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { AiOutlineFundView } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import {
  Container,
  Div,
  StyleMarket,
  Title,
  StyleLogo,
  StyleWallet,
  StyleNews,
  StyleOverview,
} from "./index.styles";

class MainNavbar extends React.Component {
  render() {
    return (
      <Container>
        <Div>
          <StyleLogo>
            <SiRedux />
          </StyleLogo>
          <Title>Your Logo</Title>
        </Div>
        <Div>
          <StyleOverview>
            <AiOutlineFundView />
          </StyleOverview>
          <Title>Overview</Title>
        </Div>
        <Div>
          <StyleWallet>
            <FaWallet />
          </StyleWallet>
          <Title>Wallet</Title>
        </Div>
        <Div>
          <StyleNews>
            <HiOutlineNewspaper />
          </StyleNews>
          <Title>News</Title>
        </Div>
        <Div>
          <StyleMarket>
            <BsFillBarChartFill />
          </StyleMarket>
          <Title>Market</Title>
        </Div>
      </Container>
    );
  }
}
export default MainNavbar;
