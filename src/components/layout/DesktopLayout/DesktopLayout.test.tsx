import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { DesktopLayout } from "./DesktopLayout";

describe("DesktopLayout", () => {
  it("should be render", () => {
    render(<DesktopLayout />);
  });
});
