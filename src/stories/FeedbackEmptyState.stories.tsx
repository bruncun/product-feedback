import { ComponentMeta, ComponentStory } from "@storybook/react";
import FeedbackEmptyState from "./FeedbackEmptyState";

export default {
  title: "FeedbackEmptyState",
  component: FeedbackEmptyState,
  argTypes: {
    onAddFeedback: { action: "onAddFeedback" },
  },
} as ComponentMeta<typeof FeedbackEmptyState>;

const Template: ComponentStory<typeof FeedbackEmptyState> = (args) => (
  <FeedbackEmptyState {...args} />
);

export const Default = Template.bind({});
