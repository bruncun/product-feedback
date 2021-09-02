import { render, screen } from "@testing-library/react";
import FeedbacksList from "./FeedbacksList";

test("loads and shows empty feedback state when no feedback", () => {
  const fn = jest.fn;
  render(<FeedbacksList feedbacks={[]} onAddFeedback={fn} />);
  const emptyFeedback = screen.getByTestId("feedback-empty");
  emptyFeedback.click();
  expect(emptyFeedback).toBeVisible();
});
