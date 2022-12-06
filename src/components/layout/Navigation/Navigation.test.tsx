import { afterEach, describe, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { Navigation } from "./Navigation";

describe("Navigation", () => {
  afterEach(() => cleanup());

  it("should be render", () => {
    render(<Navigation />);
  });
});
