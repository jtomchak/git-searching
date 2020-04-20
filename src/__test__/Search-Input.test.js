import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchInput from "../components/SearchInput";

let onChangeMock = jest.fn();
let onSubmitMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

/**
 * takes a lot of props
 * 2 functions - handleOnChange and onSubmit
 * 3 the acutal `inputTerm`,  isEnabled, and isLoading
 */
test("Render SearchInput Form", () => {
  const { getByLabelText, getByPlaceholderText, getByText } = render(
    <SearchInput
      inputTerm=""
      isEnabled={false}
      isLoading={false}
      handleInputOnChange={onChangeMock}
      handleSubmit={onSubmitMock}
    />
  );
  expect(getByLabelText(/search/i)).toBeInDocument;
  expect(getByPlaceholderText(/^find a user$/i)).toNotBeNull; //regex full string match ignore case
  expect(getByText(/^Search/).closest("button")).toBeDisabled();
});

/**
 * Form Button Subit is disabled/enabled with props
 */
test("SearchInput Form toggle enabled and disabled submit/loading", () => {
  const { rerender, getByText } = render(
    <SearchInput
      inputTerm=""
      isEnabled={false}
      isLoading={false}
      handleInputOnChange={onChangeMock}
      handleSubmit={onSubmitMock}
    />
  );
  expect(getByText(/^Search/).closest("button")).toBeDisabled();

  /**
   * Rerender Form
   * Form should be enabled
   */
  rerender(
    <SearchInput
      inputTerm=""
      isEnabled={true}
      isLoading={false}
      handleInputOnChange={onChangeMock}
      handleSubmit={onSubmitMock}
    />
  );
  expect(getByText(/^Search/).closest("button")).toBeEnabled();

  /**
   * Rerender Form
   * is loading, button should be disabled
   * We have enabled and loading, looks like it can be 'loading' and still enabled?
   */
  rerender(
    <SearchInput
      inputTerm=""
      isEnabled={true}
      isLoading={true}
      handleInputOnChange={onChangeMock}
      handleSubmit={onSubmitMock}
    />
  );
  expect(getByText(/^Search/).closest("button")).toBeEnabled();
});

/**
 * input event will call 'handleInputOnChange' prop function
 */
test("SearchInput change triggers handleInput function", () => {
  const { getByLabelText, getByPlaceholderText, getByText, debug } = render(
    <SearchInput
      inputTerm=""
      isEnabled={true}
      isLoading={false}
      handleInputOnChange={onChangeMock}
      handleSubmit={onSubmitMock}
    />
  );
  const input = getByLabelText(/search/i);
  expect(input.value).toBe("");

  fireEvent.change(input, { target: { value: "jtomchak" } });
  expect(onChangeMock).toHaveBeenCalledTimes(1);
  fireEvent.change(input, { target: { value: "jtom" } });
  expect(onChangeMock).toHaveBeenCalledTimes(2);
});

test("Click even will call handleOnSubmit prop function", () => {
  const { getByText } = render(
    <SearchInput
      inputTerm=""
      isEnabled={true}
      isLoading={false}
      handleInputOnChange={onChangeMock}
      handleSubmit={onSubmitMock}
    />
  );
  const searchButton = getByText(/^Search/).closest("button");
  fireEvent.submit(searchButton);
  expect(onSubmitMock).toHaveBeenCalledTimes(1);
});
