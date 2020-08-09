import React, { FunctionComponent } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Logo from "../../components/Logo";

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="shell flex flex__column flex__justify-content--space-between">
        <div className="navbar flex flex__justify-content--center flex__align-items--center">
          <Link id="home-link" to="/">
            <Logo />
          </Link>
        </div>
        <div className="navigation flex flex__justify-content--space-between">
          <Link className="vertical-button" id="about-link" to="/about">
            About
          </Link>
          <Link className="vertical-button" id="portfolio-link" to="/portfolio">
            Portfolio
          </Link>
        </div>
        <div className="download flex flex__justify-content--center flex__align-items--center">
          <button id="download-resume-link">Download Full Resume (PDF)</button>
        </div>
      </div>
      <div className="routes">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
