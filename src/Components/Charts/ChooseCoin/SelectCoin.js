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
        <form>
          <li onClick={() => props.handleDuration(item)}>{item.period}</li>
        </form>
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
    coinList: this.props.coinList.slice(0, 8),
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
  };

  handleDuration = (item) => {
    this.state.periodInfo.map((element) => {
      if (element.id === item.id) {
        this.props.alert(element.id);
        this.setState({ selectedTime: element, timeSelect: false });
      }
    });
  };
  handleType = (item) => {
    let type = this.state.coinInfo;
    type.map((element) => {
      if (element.id === item.id) {
        this.props.handleType(element);
        this.setState({ selectedType: element, dataType: false });
      }
    });
  };

  handleCoin = (item) => {
    let list = this.state.coinList;
    list.map((element) => {
      if (element.name === item.name) {
        this.props.alert2(element.name);
        this.setState({ selectedCoin: element, list: false });
      }
    });
  };

  handleList = () => {
    this.setState({
      list: !this.state.list,
      timeSelect: false,
      dataType: false,
    });
  };
  handleTimeSelect = (props) => {
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
              <Info>
                {this.state.selectedTime
                  ? this.state.selectedTime.period
                  : "1 Year"}
              </Info>

              <Styledarrow />
            </NestedDiv>
            <NestedTimeList>
              {this.state.timeSelect && (
                <PeriodSelect
                  handleDuration={this.handleDuration}
                  periodInfo={this.state.periodInfo}
                  handleSubmit={this.handleSubmit}
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
