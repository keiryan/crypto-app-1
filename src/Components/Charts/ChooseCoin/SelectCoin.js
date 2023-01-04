import React, { useState } from "react";

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
          <Input />
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

function DisplayChartNavbar(props) {
  const [list, setList] = useState(false);
  const [dataType, setDataType] = useState(false);
  const [timeSelect, setTimeSelect] = useState(false);
  const [coinList, setCoinList] = useState(props.coinList.slice(0, 8));
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [periodInfo, setPeriodInfo] = useState([
    { period: "1 day", id: 1 },
    { period: "1 week", id: 7 },
    { period: "1 month", id: 30 },
    { period: "1 year", id: 365 },
  ]);
  const [coinInfo, setCoinInfo] = useState([
    { type: "Price", id: "price" },
    { type: "Volume", id: "volume" },
    { type: "Custom", id: "custom" },
  ]);
  console.log("selected coin", selectedCoin);
  const handleDuration = (item) => {
    periodInfo.forEach((element, props) => {
      if (element.id === item.id) {
        props.alert(element.id);
        setSelectedCoin(element);
        setTimeSelect(false);
      }
    });
  };
  const handleType = (item, props) => {
    coinInfo.forEach((element) => {
      if (element.id === item.id) {
        props.handleType(element);
        setSelectedType(element);
        setDataType(false);
      }
    });
  };

  const handleCoin = (item, props) => {
    coinList.forEach((element) => {
      if (element.name === item.name) {
        props.alert2(element.name);
        setSelectedCoin(element);
        setList(false);
        console.log("props value fo alert2", props.alert2);
      }
    });
  };

  const handleList = () => {
    setList(!list);
    setTimeSelect(false);
    setDataType(false);
  };
  const handleTimeSelect = (props) => {
    setTimeSelect(!timeSelect);
    setList(false);
    setDataType(false);
  };
  const handleDatatype = () => {
    setDataType(!dataType);
    setTimeSelect(false);
    setList(false);
  };
  return (
    <Wrapper>
      <TableNavbar>
        <CoinSelection onClick={handleList}>
          <Info>{selectedCoin ? selectedCoin.name : "Bitcoin"}</Info>
          <Styledarrow />
        </CoinSelection>
        <NestedList>
          {list && <NestedCoinList list={coinList} handleCoin={handleCoin} />}
        </NestedList>
      </TableNavbar>
      <InnerDiv>
        <Div>
          <CoinDisplayType onClick={handleDatatype}>
            <Info>{selectedType ? selectedType.type : "Price"}</Info>

            <Styledarrow />
          </CoinDisplayType>
          <NestedDataList>
            {dataType && (
              <CoinInfoType coinInfo={coinInfo} handleType={handleType} />
            )}
          </NestedDataList>
        </Div>
        <TimeDiv>
          <NestedDiv onClick={handleTimeSelect}>
            <Info>{selectedTime ? selectedTime.period : "1 Year"}</Info>

            <Styledarrow />
          </NestedDiv>
          <NestedTimeList>
            {timeSelect && (
              <PeriodSelect
                handleDuration={handleDuration}
                periodInfo={periodInfo}
              />
            )}
          </NestedTimeList>
        </TimeDiv>
      </InnerDiv>
    </Wrapper>
  );
}
export default DisplayChartNavbar;
