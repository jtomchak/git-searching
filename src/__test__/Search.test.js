import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getUsersBySearchTerm as mockGetUsersBySearchTerm } from "../api";
import Search from "../components/Search";

jest.mock("../api");

let handleSuccessMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("Render Search Input Form", () => {
  const { getByLabelText, getByPlaceholderText, getByText } = render(
    <Search handleSuccess={handleSuccessMock} />
  );
  expect(getByLabelText(/search/i)).toBeInDocument;
  expect(getByPlaceholderText(/^find a user$/i)).toNotBeNull; //regex full string match ignore case
  expect(getByText(/^Search/).closest("button")).toBeDisabled();
});

/**
 * handle search input on change
 *
 */
test("Text input updates input value", () => {
  const { getByLabelText } = render(
    <Search handleSuccess={handleSuccessMock} />
  );
  const input = getByLabelText(/search/i);
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "jesse" } });
  expect(input.value).toBe("jesse");
});

test("Search Button is enabled/disabled by text input of more/less than 2 chars", () => {
  const { getByLabelText, getByText } = render(
    <Search handleSuccess={handleSuccessMock} />
  );
  const input = getByLabelText(/search/i);
  const searchButton = getByText(/^Search/).closest("button");
  expect(searchButton).toBeDisabled(); // start disabled
  fireEvent.change(input, { target: { value: "jesse" } });
  expect(searchButton).toBeEnabled(); // should now be enabled
  fireEvent.change(input, { target: { value: "je" } });
  expect(searchButton).toBeDisabled(); // reverts to disabled when char below 2
});

test("Clicking the search button will fetch search results", () => {
  // https://jestjs.io/docs/en/mock-function-api.html#mockfnmockreturnvalueoncevalue
  mockGetUsersBySearchTerm.mockResolvedValueOnce(); // Returns a resolved promise, no data
  const { getByLabelText, getByText } = render(
    <Search handleSuccess={handleSuccessMock} />
  );
  const searchButton = getByText(/^Search/).closest("button");
  fireEvent.change(getByLabelText(/search/i), { target: { value: "jesse" } }); // set the value of our input
  expect(searchButton).toBeEnabled();
  fireEvent.click(searchButton);

  expect(mockGetUsersBySearchTerm).toHaveBeenCalledTimes(1);
  // expect(handleSuccessMock).toBeCalledWith('Some argument');
});
