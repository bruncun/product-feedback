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

test("shows hamburger icon when sidebar is closed", () => {
  const fn = jest.fn();
  render(<Navbar onToggleSidebar={fn} />);
  const hamburgerIcon = screen.getByTestId("hamburger-icon");
  expect(hamburgerIcon).toBeVisible();
});

test("shows close icon when sidebar is open", () => {
  const fn = jest.fn();
  render(<Navbar onToggleSidebar={fn} state="SIDEBAR_OPEN" />);
  const closeIcon = screen.getByTestId("close-icon");
  expect(closeIcon).toBeVisible();
});
