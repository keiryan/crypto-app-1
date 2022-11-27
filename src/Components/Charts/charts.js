import React from "react";
import LineGraph from "./Graph/Sparkline.js";
import { BarGraph } from "./Graph/BarChart.js";
import {
  Container,
  MainContainer,
  ChartContainer,
  Wrapper,
  Div,
  Price,
  Date,
  P,
} from "./charts.styles.js";

class CoinChart extends React.Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <ChartContainer>
            <Wrapper>
              <P>Price</P>
              <Price>$24.27 ths</Price>
              <Date>February 16, 2022</Date>
            </Wrapper>
            <Div>
              {this.props.coinVolume?.prices && (
                <LineGraph data={this.props.coinVolume.prices} />
              )}
            </Div>
          </ChartContainer>
          <ChartContainer>
            <Wrapper>
              <P>Volume 24h</P>
              <Price>$24.27 ths</Price>
              <Date>{this.getDate}</Date>
            </Wrapper>
            <Div>
              {this.props.coinVolume?.prices && (
                <BarGraph data={this.props.coinVolume.total_volumes} />
              )}
            </Div>
          </ChartContainer>
        </MainContainer>
      </Container>
    );
  }
}
export default CoinChart;
