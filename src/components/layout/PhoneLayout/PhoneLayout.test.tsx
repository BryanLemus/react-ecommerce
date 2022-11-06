import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { PhoneLayout } from "./PhoneLayout";

describe("PhoneLayout", () => {
  it("should be render", () => {
    render(<PhoneLayout />);
  });
});
