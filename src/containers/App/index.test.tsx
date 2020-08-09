import React from "react";
import { render } from "@testing-library/react";
import App from ".";

test("renders coming soon", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Coming Soon/i);
  expect(linkElement).toBeInTheDocument();
});
