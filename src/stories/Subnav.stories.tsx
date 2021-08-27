import { ComponentMeta, ComponentStory } from "@storybook/react";
import Subnav from "./Subnav";

export default {
  title: "Subnav",
  component: Subnav,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSortBy: { action: "onSortBy" },
    onAddFeedback: { action: "onAddFeedback" },
  },
} as ComponentMeta<typeof Subnav>;

const Template: ComponentStory<typeof Subnav> = (args) => <Subnav {...args} />;

export const Default = Template.bind({});
