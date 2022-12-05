import React from "react";

import LineGraph from "./Graph/Sparkline.js";
import DisplayChartNavbar from "./ChooseCoin/SelectCoin.js";
import {
  Container,
  MainContainer,
  ChartContainer,
  Div,
  CoinInfoDiv,
  IndicatorContainer,
} from "./charts.styles.js";

class CoinChart extends React.Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <ChartContainer>
            <CoinInfoDiv>
              <DisplayChartNavbar />
            </CoinInfoDiv>
            <Div>
              {this.props.coinValue?.prices && (
                <LineGraph
                  data={this.props.coinValue.prices}
                  volume={this.props.coinValue.total_volumes}
                />
              )}
            </Div>
          </ChartContainer>
          <IndicatorContainer></IndicatorContainer>
        </MainContainer>
      </Container>
    );
  }
}
export default CoinChart;
