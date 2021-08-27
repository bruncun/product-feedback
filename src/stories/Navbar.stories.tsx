import React from "react";
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

export const Default = Template.bind({});
