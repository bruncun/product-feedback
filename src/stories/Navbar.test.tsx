import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("loads and handles sidebar toggle", () => {
  const fn = jest.fn();
  render(<Navbar onToggleSidebar={fn} />);
  const sidebarToggle = screen.getByTestId("sidebar-toggle");
  sidebarToggle.click();
  expect(fn).toBeCalled();
});
