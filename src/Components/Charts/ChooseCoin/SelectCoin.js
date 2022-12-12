import React from "react";

import {
  Wrapper,
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
  Styledarrow,
  StyledInput,
} from "../ChooseCoin/index.styles";

const NestedCoinList = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Input onChange={props.handleFilter} />
        </li>
        {props.list.map((item) => (
          <li>{item.name}</li>
        ))}
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
      <li id="3">1 day</li>
      <li id="7">1 week</li>
      <li id="30">1 month</li>
      <li id="365">1 year</li>
    </ul>
  );
};

const Input = () => {
  return <StyledInput placeholder="Search coin..." />;
};

class DisplayChartNavbar extends React.Component {
  state = {
    list: false,
    dataType: false,
    timeSelect: false,
    coinList: this.props.coinList,
    input: "",
  };

  handleFilter = (e) => {
    this.setState({ input: e.target.value });
  };
  handleSame = (item) => {};
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
    // const inputValue = this.state.input;
    // const lowerCase =
    //   inputValue.split("")[0].toUpperCase() + inputValue.slice(1);
    // const lowerCaseCoinList = this.state.coinList?.map((item) => item.name);
    // const filterItem = lowerCaseCoinList.filter((element) =>
    //   element.name.includes(lowerCase)
    // );

    return (
      <Wrapper>
        <TableNavbar>
          <CoinSelection onClick={this.handleList}>
            <Info>Bitcoin</Info>
            <Styledarrow />
          </CoinSelection>
          <NestedList>
            {this.state.list && (
              <NestedCoinList
                list={this.state.coinList}
                handleFilter={this.handleFilter}
                value={this.state.input}
              />
            )}
          </NestedList>
        </TableNavbar>
        <InnerDiv>
          <Div>
            <CoinDisplayType onClick={this.handleDatatype}>
              <Info>Data Type</Info>

              <Styledarrow />
            </CoinDisplayType>
            <NestedDataList>
              {this.state.dataType && <CoinInfoType />}
            </NestedDataList>
          </Div>
          <TimeDiv>
            <NestedDiv onClick={this.handleTimeSelect}>
              <Info>Weekly</Info>

              <Styledarrow />
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
