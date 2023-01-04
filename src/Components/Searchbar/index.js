import React, { useState, useEffect } from "react";
import { Container, Input, UnorderList, OrderList } from "./index.styles.js";

export default function Searchbox(props) {
  const [value, setValue] = useState("");
  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    setCoinList(props.coinList);
  }, [props.coinList]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
  };
  const coinNameList = coinList?.map((item) => item.name);
  const filterItem = coinNameList
    ?.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    .slice(0, 10);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Search..."
          />
        </form>
        <UnorderList>
          {filterItem?.map((item) => {
            if (value === "") return null;
            return <OrderList key={item}>{item}</OrderList>;
          })}
        </UnorderList>
        {}
      </Container>
    </>
  );
}
