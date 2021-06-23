import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <Home />
          </Route>
          <Route exact path="/division">
            <Home />
          </Route>
          <Route exact path="/members">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;