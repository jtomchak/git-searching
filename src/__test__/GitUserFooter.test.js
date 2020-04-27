import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import GitUserFooter from "../components/GitUserFooter";

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

test("GitUserFooter Renders without blowing up", () => {
  const { getByText } = render(<GitUserFooter user={user} />);
  expect(getByText(/Repo/)).toHaveAttribute(
    "href",
    "https://github.com/jtomchak/repositories"
  );
  expect(getByText(/Gists/)).toHaveAttribute(
    "href",
    "https://gist.github.com/jtomchak"
  );
  expect(getByText(/Following/)).toHaveAttribute(
    "href",
    "https://github.com/jtomchak/following"
  );
});
