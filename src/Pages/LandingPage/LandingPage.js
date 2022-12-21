import React from "react";
import LandingPageLayout from "../../Components/LandingPageLayout";
import axios from "axios";

class LandingPage extends React.Component {
  state = {
    coinLength: 12,
    coinData: [],
    coinPriceVolume: null,
    // coinList: null,
    period: 365,
    greedValue: null,
    selectedCoin: "bitcoin",
    selectedType: "custom",
    isError: false,
    isLoading: false,
    page: 1,
  };
  ParentAlert = (number) => {
    this.setState({ period: number });
  };
  async componentDidUpdate(prevprops, prevState) {
    if (prevState.period !== this.state.period) {
      this.getCoinPriceVolume();
    }
    if (prevState.selectedCoin !== this.state.selectedCoin) {
      this.getCoinPriceVolume();
    }
    if (prevState.page !== this.state.page) {
      try {
        const response = await axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.state.coinLength}&page=${this.state.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        );
        this.setState({
          coinData: [...this.state.coinData, ...response.data],

          coinLength: 10,
        });
      } catch (err) {
        this.setState({ isError: true });
      }
    }
  }
  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
  };
  ParentSelectCoin = (coin) => {
    this.setState({ selectedCoin: coin.toLowerCase() });
  };

  getCoinData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.state.coinLength}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
        `https://api.coingecko.com/api/v3/coins/${this.state.selectedCoin}/market_chart?vs_currency=usd&days=${this.state.period}&interval=daily`
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
    return (
      <div>
        {this.state.coinData.length ? (
          <LandingPageLayout
            items={this.state.coinData}
            coinValue={this.state.coinPriceVolume}
            greedValue={this.state.greedValue}
            coinLength={this.state.coinLength}
            coinList={this.state.coinList}
            alert={this.ParentAlert}
            alert2={this.ParentSelectCoin}
            fetchMoreData={this.fetchMoreData}
            coinDataLength={this.state.coinData}
          />
        ) : (
          <h1>Error</h1>
        )}
      </div>
    );
  }
}
export default LandingPage;
