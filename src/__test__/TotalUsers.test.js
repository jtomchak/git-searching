import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TotalUsers from "../components/TotalUsers";

test("TotalUsers renders empty with no users", () => {
  const { container } = render(<TotalUsers users={null} />);
  expect(container.firstChild).toBeNull();
});

test("TotalUsers shows number of users", () => {
  const { getByText } = render(<TotalUsers users={17} />);
  expect(getByText(/found/i).textContent).toBe("Found 17");
});
