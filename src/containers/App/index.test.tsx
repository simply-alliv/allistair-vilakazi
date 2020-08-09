import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from ".";

test("renders coming soon", () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = getByText(/Coming Soon/i);
  expect(linkElement).toBeInTheDocument();
});
