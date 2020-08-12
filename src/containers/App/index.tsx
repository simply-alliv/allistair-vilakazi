import React, { FunctionComponent } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Logo from "../../components/Logo";
import "./index.css";

const App: FunctionComponent = () => {
  let location = useLocation();

  return (
    <React.Fragment>
      <div className="shell flex flex__column flex__justify-content--space-between">
        <div className="navigation navigation-top flex flex__justify-content--center flex__align-items--center">
          <Link className="button" id="home-link" to="/">
            <Logo />
          </Link>
        </div>
        <div className="navigation navigation-left flex flex__align-items--center">
          <Link className="button vertical-button" id="about-link" to="/about">
            About
          </Link>
        </div>
        <div className="navigation navigation-right flex flex__align-items--center">
          <Link
            className="button vertical-button"
            id="portfolio-link"
            to="/portfolio"
          >
            Portfolio
          </Link>
        </div>
        <div className="routes">
          <Switch>
            <Route path="/about">
              <About activeRoute={location.pathname} />
            </Route>
            <Route path="/portfolio">
              <Portfolio activeRoute={location.pathname} />
            </Route>
            <Route path="/">
              <Home activeRoute={location.pathname} />
            </Route>
          </Switch>
        </div>
        <div className="navigation navigation-bottom flex flex__justify-content--center flex__align-items--center">
          <button id="download-resume-link">Download Full Resume (PDF)</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
