import { ComponentMeta, ComponentStory } from "@storybook/react";
import FeedbacksList from "./FeedbacksList";

export default {
  title: "FeedbacksList",
  component: FeedbacksList,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FeedbacksList>;

const Template: ComponentStory<typeof FeedbacksList> = (args) => (
  <FeedbacksList {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  feedbacks: [],
};
