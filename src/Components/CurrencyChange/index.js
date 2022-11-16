import React from "react";
import { Container, CurrencySymbol, Currency, Div } from "./index.styles";

class CurrencySelector extends React.Component {
  render() {
    return (
      <Container>
        <CurrencySymbol>&#36;</CurrencySymbol>
        <Currency>USD</Currency>
        <Div>&darr;</Div>
      </Container>
    );
  }
}
export default CurrencySelector;
