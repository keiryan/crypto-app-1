import React from "react";
import { CoinPage, LandingPage, PortfolioPage, Setting } from "./Pages";
import { Container, Wrapper, Nav } from "./App.styles.js";
import Navbar from "./Components/Navbar/index";
import { GlobalStyle } from "./styles/Globalstyles.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./Components/MainNavbar";
import axios from "axios";

const theme = {
  color: {
    bg: "",
    TextColor: "",
  },
};
class App extends React.Component {
  state = {
    coinList: [],
    isError: false,
  };

  getCoinData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinList: response.data,
      });
    } catch (err) {
      this.setState({ isError: true });
    }
  };
  componentDidMount() {
    this.getCoinData();
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Container themeColor={this.state.themeColor}>
            <Nav>
              <MainNavbar />
            </Nav>
            <GlobalStyle />
            <Wrapper>
              <Navbar coinList={this.state.coinList} />
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/PortfolioPage" exact component={PortfolioPage} />
                <Route path="/CoinPage" exact component={CoinPage} />
                <Route path="/Setting" exact component={Setting} />
              </Switch>
            </Wrapper>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
