import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about"></Route>
          <Route exact path="/division"></Route>
          <Route exact path="/members"></Route>
          <Route exact path="/contact"></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
