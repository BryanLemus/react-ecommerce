import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { AdaptativeView } from "./AdaptativeView";

describe("AdaptativeView", () => {
  afterEach(() => cleanup());

  it("should be render", () => {
    render(<AdaptativeView sm="Hello world!" />);
    expect(screen.findByText("Hello world!")).toBeDefined;
  });

  it("should be render views", () => {
    const el = render(<AdaptativeView sm="mobile" md="tablet" lg="desktop" />);

    const result = el.baseElement.textContent;
    expect(result).toBe("desktop");
  });
});
