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
          <li onClick={() => props.handleCoin(item)}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
const CoinInfoType = (props) => {
  return (
    <ul>
      {props.coinInfo.map((item) => (
        <li onClick={() => props.handleType(item)}>{item.type}</li>
      ))}
    </ul>
  );
};
const PeriodSelect = (props) => {
  return (
    <ul>
      {props.periodInfo.map((item) => (
        <li onClick={() => props.handleDuration(item)}>{item.period}</li>
      ))}
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
    selectedTime: "",
    selectedType: "",
    selectedCoin: "",
    periodInfo: [
      { period: "1 day", id: 1 },
      { period: "1 week", id: 7 },
      { period: "1 month", id: 30 },
      { period: "1 year", id: 365 },
    ],
    coinInfo: [
      { type: "Price", id: "price" },
      { type: "Volume", id: "volume" },
      { type: "Custom", id: "custom" },
    ],
    input: "",
  };
  handleDuration = (item) => {
    this.state.periodInfo.map((element) => {
      if (element.id === item.id) {
        this.props.alert(element.id);
        this.setState({ selectedTime: element });
      }
    });
  };
  handleType = (item) => {
    this.state.coinInfo.map((element) => {
      if (element.id === item.id) {
        this.setState({ selectedType: element });
      }
    });
  };
  handleCoin = (item) => {
    this.state.coinList.map((element) => {
      if (element.name === item.name) {
        this.props.alert2(element.name);
        this.setState({ selectedCoin: element });
      }
    });
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
    const func = this.state.selectedTime;
    return (
      <Wrapper>
        <TableNavbar>
          <CoinSelection onClick={this.handleList}>
            <Info>
              {this.state.selectedCoin
                ? this.state.selectedCoin.name
                : "Bitcoin"}
            </Info>
            <Styledarrow />
          </CoinSelection>
          <NestedList>
            {this.state.list && (
              <NestedCoinList
                list={this.state.coinList}
                handleFilter={this.handleFilter}
                value={this.state.input}
                handleCoin={this.handleCoin}
              />
            )}
          </NestedList>
        </TableNavbar>
        <InnerDiv>
          <Div>
            <CoinDisplayType onClick={this.handleDatatype}>
              <Info>
                {this.state.selectedType
                  ? this.state.selectedType.type
                  : "Price"}
              </Info>

              <Styledarrow />
            </CoinDisplayType>
            <NestedDataList>
              {this.state.dataType && (
                <CoinInfoType
                  coinInfo={this.state.coinInfo}
                  handleType={this.handleType}
                />
              )}
            </NestedDataList>
          </Div>
          <TimeDiv>
            <NestedDiv onClick={this.handleTimeSelect}>
              <Info onClick={() => this.props.alert(this.state.selectedTime)}>
                {this.state.selectedTime
                  ? this.state.selectedTime.period
                  : "week"}
              </Info>

              <Styledarrow />
            </NestedDiv>
            <NestedTimeList>
              {this.state.timeSelect && (
                <PeriodSelect
                  handleDuration={this.handleDuration}
                  periodInfo={this.state.periodInfo}
                />
              )}
            </NestedTimeList>
          </TimeDiv>
        </InnerDiv>
      </Wrapper>
    );
  }
}
export default DisplayChartNavbar;
