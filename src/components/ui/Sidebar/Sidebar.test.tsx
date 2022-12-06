import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("should be render", () => {
    render(<Sidebar />);
  });
});
