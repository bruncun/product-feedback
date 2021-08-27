import React from "react";
import { render, screen } from "@testing-library/react";
import Subnav from "./Subnav";
import userEvent from "@testing-library/user-event";

test("loads and handles add feedback", () => {
  const fn = jest.fn();
  render(<Subnav onAddFeedback={fn} onSortBy={fn} />);
  const addFeedbackButton = screen.getByTestId("add-feedback-button");
  addFeedbackButton.click();
  expect(fn).toBeCalled();
});

test("handles sort by", () => {
  const fn = jest.fn();
  render(<Subnav onAddFeedback={fn} onSortBy={fn} />);
  const sortBySelect = screen.getByTestId("sort-by-select");
  userEvent.selectOptions(sortBySelect, "SORT_BY_LEAST_UPVOTES");
  expect(fn).toBeCalled();
});
