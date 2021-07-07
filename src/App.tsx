import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Division from "./pages/Division";
import Member from "./pages/Member";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/division">
            <Division />
          </Route>
          <Route exact path="/members">
            <Member />
          </Route>
          <Route exact path="/contact"></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
