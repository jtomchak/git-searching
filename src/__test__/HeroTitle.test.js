import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import HeroTitle from "../components/HeroTitle";

test("HeroTitle shows Title and Subtitle", () => {
  const sampleTitle = "Git Searching";
  const sampleSubtitle = "searching for stuff";
  const { getByText, debug } = render(
    <HeroTitle title={sampleTitle} subtitle={sampleSubtitle} />
  );
  expect(getByText(sampleTitle).textContent).toBe("Git Searching");
  expect(getByText(sampleSubtitle).textContent).toBe("searching for stuff");
});
