import EmptyFeedbacksList, {
  EmptyFeedbacksListProps,
} from "./EmptyFeedbacksList";

export interface FeedbacksListProps extends EmptyFeedbacksListProps {
  feedbacks: Feedback[];
}

const FeedbacksList = ({ feedbacks, onAddFeedback }: FeedbacksListProps) => (
  <>
    {feedbacks.length == 0 && (
      <EmptyFeedbacksList onAddFeedback={onAddFeedback} />
    )}
  </>
);

export default FeedbacksList;
