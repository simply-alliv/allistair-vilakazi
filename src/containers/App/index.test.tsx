import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from ".";

describe("App route", () => {
  it("renders about button", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const buttonElement = getByText(/ABOUT/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders portfolio button", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const buttonElement = getByText(/PORTFOLIO/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders download button", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    const buttonElement = getByText(/DOWNLOAD FULL RESUME \(PDF\)/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
