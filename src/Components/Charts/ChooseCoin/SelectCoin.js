import React from "react";
import {
  Wrapper,
  CoinLogo,
  CoinSelection,
  CoinDisplayType,
  TimeDiv,
  InnerDiv,
  TableNavbar,
  Info,
  NestedList,
  Div,
  NestedDiv,
  NestedTimeList,
  NestedDataList,
} from "../ChooseCoin/index.styles";
import { FaAngleDown } from "react-icons/fa";

const NestedCoinList = () => {
  return (
    <div>
      <ul>
        <li>Bitcoin</li>
        <li>Ethereum</li>
        <li>Tether</li>
        <li>Binance</li>
        <li>XRP</li>
      </ul>
    </div>
  );
};
const CoinInfoType = () => {
  return (
    <ul>
      <li>Price</li>
      <li>Volume</li>
      <li>Custom</li>
    </ul>
  );
};
const PeriodSelect = () => {
  return (
    <ul>
      <li>1 day</li>
      <li>1 week</li>
      <li>1 month</li>
      <li>1 year</li>
    </ul>
  );
};

class DisplayChartNavbar extends React.Component {
  state = {
    list: false,
    dataType: false,
    timeSelect: false,
  };
  handleList = () => {
    this.setState({
      list: !this.state.list,
      timeSelect: false,
      dataType: false,
    });
  };
  handleTimeSelect = () => {
    this.setState({
      timeSelect: !this.state.timeSelect,
      list: false,
      dataType: false,
    });
  };
  handleDatatype = () => {
    this.setState({
      dataType: !this.state.dataType,
      timeSelect: false,
      list: false,
    });
  };
  render() {
    console.log("check", this.state.list);
    return (
      <Wrapper>
        <TableNavbar>
          <CoinSelection>
            <CoinLogo />
            <Info onClick={this.handleList}>Bitcoin</Info>
            <FaAngleDown onClick={this.handleList} />
          </CoinSelection>
          <NestedList> {this.state.list && <NestedCoinList />}</NestedList>
        </TableNavbar>
        <InnerDiv>
          <Div>
            <CoinDisplayType onClick={this.handleDatatype}>
              <Info>Data Type</Info>
              <FaAngleDown />
            </CoinDisplayType>
            <NestedDataList>
              {this.state.dataType && <CoinInfoType />}
            </NestedDataList>
          </Div>
          <TimeDiv>
            <NestedDiv onClick={this.handleTimeSelect}>
              <Info>Weekly</Info>
              <FaAngleDown />
            </NestedDiv>
            <NestedTimeList>
              {this.state.timeSelect && <PeriodSelect />}
            </NestedTimeList>
          </TimeDiv>
        </InnerDiv>
      </Wrapper>
    );
  }
}
export default DisplayChartNavbar;
