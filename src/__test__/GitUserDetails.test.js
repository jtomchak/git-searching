import React from "react";
import { render } from "@testing-library/react";
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
