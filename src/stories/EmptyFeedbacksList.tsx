import { Card, Heading, Button, Box, Image, Paragraph } from "theme-ui";
import illustrationEmpty from "./assets/suggestions/illustration-empty.svg";

export interface EmptyFeedbacksListProps {
  onAddFeedback: () => void;
}

const EmptyFeedbacksList = ({ onAddFeedback }: EmptyFeedbacksListProps) => (
  <Card data-testid="feedback-empty">
    <Box
      sx={{
        my: 3,
        py: 2,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Image
        src={illustrationEmpty}
        alt="A detective holding a magnifying glass to their eye"
        sx={{ mb: 5 }}
      />
      <Heading variant="h3" as="h1" sx={{ mb: 4 }}>
        There is no feedback yet.
      </Heading>
      <Paragraph sx={{ mb: 4 }}>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Paragraph>
      <Box sx={{ pt: 1 }}>
        <Button onClick={onAddFeedback} data-testid="add-feedback-button">
          + Add Feedback
        </Button>
      </Box>
    </Box>
  </Card>
);

export default EmptyFeedbacksList;
