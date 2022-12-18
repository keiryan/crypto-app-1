import React from "react";
import { CoinPage, LandingPage, PortfolioPage, Setting } from "./Pages";
import { Container, Wrapper, Nav } from "./App.styles.js";
import Navbar from "./Components/Navbar/index";
import { GlobalStyle } from "./styles/Globalstyles.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./Components/MainNavbar";

const theme = {
  color: {
    bg: "",
    TextColor: "",
  },
};
class App extends React.Component {
  state = {
    isActive: false,
  };
  handleIsActive = () => {
    this.setState({ isActive: !this.state.isActive });
  };
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
              <Navbar handleTheme={this.handleTheme} />
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
