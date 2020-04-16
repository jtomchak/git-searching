import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Search from "../components/Search";

test("Render Search Input Form", () => {
  const { getByLabelText, getByPlaceholderText, getByText } = render(
    <Search />
  );
  expect(getByLabelText(/search/i)).toNotBeNull;
  expect(getByPlaceholderText(/^find a user$/i)).toNotBeNull; //regex full string match ignore case
  expect(getByText(/^Search/).closest("button")).toBeDisabled();
});
