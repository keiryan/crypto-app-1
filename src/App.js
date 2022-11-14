import React from "react";
import LandingPage from './Pages/LandingPage/index.js'
import PortfolioPage from './Pages/PortfolioPage/index.js'
import CoinPage from './Pages/CoinPage/index.js'
import {Container} from './App.styles.js'
import Navbar from "./Components/Navbar/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (

    <Router>
      <Container>
        <nav>
      <Navbar/>
        </nav>
        <Switch>
          <Route path="#" exact component={LandingPage} />
          <Route path="#" exact component={PortfolioPage} / >
          <Route path="#" exact component={CoinPage}/>
        </Switch>
      </Container>
    </Router>

  );
}


