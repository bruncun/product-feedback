import { ComponentMeta, ComponentStory } from "@storybook/react";
import SuggestionsScreen from "./SuggestionsScreen";
import { Empty } from "./FeedbacksList.stories";

export default {
  title: "Screens/Suggestions",
  component: SuggestionsScreen,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSortBy: { action: "onSortBy" },
    onAddFeedback: { action: "onAddFeedback" },
    onToggleSidebar: { action: "onToggleSidebar" },
  },
} as ComponentMeta<typeof SuggestionsScreen>;

const Template: ComponentStory<typeof SuggestionsScreen> = (args) => (
  <SuggestionsScreen {...args} />
);

export const EmptyFeedback = Template.bind({});
EmptyFeedback.args = { ...Empty.args };
