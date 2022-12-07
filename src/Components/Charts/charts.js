import React from "react";

import LineGraph from "./Graph/Sparkline.js";
import { PieGraph } from "./Graph/Doughnut.js";
import DisplayChartNavbar from "./ChooseCoin/SelectCoin.js";
import {
  Container,
  MainContainer,
  ChartContainer,
  Div,
  CoinInfoDiv,
  IndicatorContainer,
  PieInfo,
  Summary,
  GreedFigure,
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
          <IndicatorContainer>
            <PieInfo>Fear greed indicator</PieInfo>
            {this.props.greedValue?.data && (
              <PieGraph greedValue={this.props.greedValue.data} />
            )}
            <GreedFigure>
              <h2>6,04</h2>
            </GreedFigure>
            <Summary>
              <ul>
                <li>Fear Indicator Level 1</li>
                <li>Fear Indicator Level 2</li>
                <li>Fear Indicator Level 3</li>
              </ul>
              <ul>
                <li>600</li>
                <li>400</li>
                <li>200</li>
              </ul>
            </Summary>
          </IndicatorContainer>
        </MainContainer>
      </Container>
    );
  }
}
export default CoinChart;
