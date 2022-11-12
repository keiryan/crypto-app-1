import React from "react";
import LandingPage from './Pages/LandingPage/index.js'
import PortfolioPage from './Pages/PortfolioPage/index.js'
import CoinPage from './Pages/CoinPage/index.js'
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
      <div>
        <nav>
      <Navbar/>
        </nav>

      
        <Switch>
          <Route path="" exact component={LandingPage}>
    
          </Route>
          <Route path="" exact component={PortfolioPage}>
            
          </Route>
          <Route path="" exact component = {CoinPage}>
            
          </Route>
        </Switch>
      </div>
    </Router>

  );
}


