import { render, screen } from "@testing-library/react";
import EmptyFeedbacksList from "./EmptyFeedbacksList";

test("loads and handles add feedback", () => {
  const fn = jest.fn();
  render(<EmptyFeedbacksList onAddFeedback={fn} />);
  const addFeedbackButton = screen.getByTestId("add-feedback-button");
  addFeedbackButton.click();
  expect(fn).toBeCalled();
});
