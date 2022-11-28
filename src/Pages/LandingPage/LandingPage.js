import React from "react";
import LandingPageLayout from "../../Components/LandingPageLayout";
import axios from "axios";
// import CoinChart from "../../Components/Charts/charts";
// import { getConfig } from "@testing-library/react";

class LandingPage extends React.Component {
  state = {
    coinData: [],
    coinPriceVolume: null,
    coinVolume: 5,
    isError: false,
    isLoading: false,
    days: 10,
  };
  getCoinData = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.state.coinVolume}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({ coinData: response.data, isLoading: false });
    } catch (err) {
      this.setState({ isError: true });
    }
  };

  getCoinPriceVolume = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${this.state.days}&interval=daily`
      );
      this.setState({ coinPriceVolume: response.data, isLoading: false });
    } catch (err) {
      this.setState({ isError: true });
    }
  };
  componentDidMount() {
    this.getCoinData();
    this.getCoinPriceVolume();
  }

  render() {
    // console.log("slow", this.state.coinData);
    // console.log("fast", this.state.coinPriceVolume);
    return (
      <div>
        {!this.state.isLoading && this.state.coinData.length ? (
          <LandingPageLayout
            items={this.state.coinData}
            coinVolume={this.state.coinPriceVolume}
          />
        ) : (
          <h1>Error</h1>
        )}
      </div>
    );
  }
}
export default LandingPage;
