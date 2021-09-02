import Navbar, { NavbarProps } from "./Navbar";
import Subnav, { SubnavProps } from "./Subnav";
import { Container } from "theme-ui";
import FeedbacksList, { FeedbacksListProps } from "./FeedbacksList";

export interface SuggestionsScreenProps
  extends NavbarProps,
    SubnavProps,
    FeedbacksListProps {
  feedbacks: Feedback[];
}

const SuggestionsScreen = ({
  feedbacks,
  onToggleSidebar,
  onAddFeedback,
  onSortBy,
}: SuggestionsScreenProps) => (
  <div data-testid="suggestions-screen">
    <Navbar onToggleSidebar={onToggleSidebar} />
    <Subnav onSortBy={onSortBy} onAddFeedback={onAddFeedback} />
    <Container py={5} px={4}>
      <Container px={3}>
        <FeedbacksList onAddFeedback={onAddFeedback} feedbacks={feedbacks} />
      </Container>
    </Container>
  </div>
);

export default SuggestionsScreen;
