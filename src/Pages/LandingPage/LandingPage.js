import React from "react";
import LandingPageLayout from "../../Components/LandingPageLayout";
import axios from "axios";

class LandingPage extends React.Component {
  state = {
    coinVolume: 10,
    coinData: [],
    coinPriceVolume: null,
    coinList: null,
    period: null,
    greedValue: null,
    selectedCoin: "",
    isError: false,
    isLoading: false,
  };
  ParentAlert = (number) => {
    return this.setState({ period: number });
  };
  componentDidUpdate(prevprops, prevState) {
    if (prevState.period !== this.state.period) {
      // console.log("state has been changed", prevState.days, this.state.days);
      this.setState({ days: this.state.days });
    }
  }
  ParentSelectCoin = (coin) => {
    this.setState({ selectedCoin: coin.toLowerCase() });
  };
  getCoinData = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.state.coinVolume}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinData: response.data,
        isLoading: false,
        coinList: response.data,
      });
    } catch (err) {
      this.setState({ isError: true });
    }
  };

  getCoinPriceVolume = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${this.state.period}&interval=daily`
      );
      this.setState({ coinPriceVolume: response.data, isLoading: false });
    } catch (err) {
      this.setState({ isError: true });
    }
  };
  getFearIndex = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios(`https://api.alternative.me/fng/?limit=1`);

      this.setState({ greedValue: response.data });
    } catch (err) {
      this.setState({ isError: true });
    }
  };

  componentDidMount() {
    this.getCoinData();
    this.getCoinPriceVolume();
    this.getFearIndex();
  }

  render() {
    console.log("coindata", this.state.coinData);
    return (
      <div>
        {!this.state.isLoading && this.state.coinData.length ? (
          <LandingPageLayout
            func={this.setDays}
            items={this.state.coinData}
            coinValue={this.state.coinPriceVolume}
            greedValue={this.state.greedValue}
            coinList={this.state.coinList}
            alert={this.ParentAlert}
            alert2={this.ParentSelectCoin}
          />
        ) : (
          <h1>Error</h1>
        )}
      </div>
    );
  }
}
export default LandingPage;
