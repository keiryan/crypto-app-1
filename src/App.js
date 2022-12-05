import React from "react";
import { CoinPage, LandingPage, PortfolioPage } from "./Pages";
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
    themeColor: false,
  };
  handleTheme = () => {
    return this.setState({ themeColor: !this.state.themeColor });
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
                <Route
                  path="/"
                  exact
                  component={LandingPage}
                  // textcolor={this.state.themeColor}
                />
                <Route path="#" exact component={PortfolioPage} />
                <Route path="#" exact component={CoinPage} />
              </Switch>
            </Wrapper>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
