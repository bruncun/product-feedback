import { ComponentMeta, ComponentStory } from "@storybook/react";
import EmptyFeedbacksList from "./EmptyFeedbacksList";

export default {
  title: "EmptyFeedbacksList",
  component: EmptyFeedbacksList,
  argTypes: {
    onAddFeedback: { action: "onAddFeedback" },
  },
} as ComponentMeta<typeof EmptyFeedbacksList>;

const Template: ComponentStory<typeof EmptyFeedbacksList> = (args) => (
  <EmptyFeedbacksList {...args} />
);

export const Default = Template.bind({});
