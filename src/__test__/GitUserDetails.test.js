import React from "react";
import { render, screen, getDefaultNormalizer } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import GitUserDetails from "../components/GitUserDetails";

// mock user payload we can use to pass as props.
const user = {
  login: "jtomchak",
  id: 76360,
  avatar_url: "https://avatars0.githubusercontent.com/u/76360?v=4",
  name: "Jesse Tomchak",
  blog: "jessetomchak.com",
  email: "jtomchak@gmail.com",
  bio:
    "Firm believer that technology is awesome, the the ability to create and contribute to software is possible from anyone. ",
  public_repos: 116,
  public_gists: 24,
  followers: 59,
  following: 3,
};

/**
 * Renders without crashing
 */
test("GitUserDetails Renders without blowing up", () => {
  const { container } = render(<GitUserDetails user={user} />);
  expect(container.firstChild).toEqual(expect.anything()); // anything will match all but null and undefined
});

/**
 * User Props render to DOM
 * https://github.com/testing-library/jest-dom#tohaveattribute
 * text match normalizer https://testing-library.com/docs/dom-testing-library/api-queries#textmatch-examples
 */
test("GitUserDetails actually shows the user's details on the DOM", () => {
  const { getByText, getByAltText } = render(<GitUserDetails user={user} />);
  const avatar = getByAltText("Avatar");
  const userBio = screen.getByText(user.bio, {
    normalizer: getDefaultNormalizer({ trim: false }),
  });
  expect(getByText(/jesse tomchak/i)).toBeInTheDocument();
  expect(getByText(/^@jtomchak/)).toBeInTheDocument();
  expect(userBio).toBeInTheDocument();
  //get image by alt tag, and check it has the correct source url
  expect(avatar).toHaveAttribute("src", user.avatar_url);
});
