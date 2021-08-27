import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onToggleSidebar: { action: "onToggleSidebar" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const SidebarClosed = Template.bind({});

export const SidebarOpen = Template.bind({});
SidebarOpen.args = {
  state: "SIDEBAR_OPEN",
};
