import React from "react";
import LandingPageLayout from "../../Components/LandingPageLayout";
// import { Para } from "./index.styles.js";
import axios from "axios";
// import { getConfig } from "@testing-library/react";

class LandingPage extends React.Component {
  state = {
    coinData: [],
    coinVolume: 5,
    isError: false,
    isLoading: false,
  };
  getCoinData = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.state.coinVolume}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      // console.log("response", response.data);
      this.setState({ coinData: response.data, isLoading: false });
    } catch (err) {
      this.setState({ isError: true });
      // console.log("error");
    }
  };
  componentDidMount() {
    this.getCoinData();
    // console.log("loading");
  }

  render() {
    console.log(this.state.coinData.sparkline_in_7d.price);
    return (
      <div>
        {!this.state.isLoading && this.state.coinData ? (
          <LandingPageLayout
            items={this.state.coinData}
            // textcolor={this.props.textcolor}
          />
        ) : (
          <h1>Error</h1>
        )}
      </div>
    );
  }
}
export default LandingPage;
