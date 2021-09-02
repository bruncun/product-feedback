import { render, screen } from "@testing-library/react";
import SuggestionsScreen from "./SuggestionsScreen";

test("loads", () => {
  const fn = jest.fn;
  render(
    <SuggestionsScreen
      feedbacks={[]}
      onAddFeedback={fn}
      onSortBy={fn}
      onToggleSidebar={fn}
    />
  );
  const suggestionsScreen = screen.getByTestId("suggestions-screen");
  suggestionsScreen.click();
  expect(suggestionsScreen).toBeVisible();
});
