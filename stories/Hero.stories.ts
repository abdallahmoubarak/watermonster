import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Hero> = {
  title: "Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Hero>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Investor: Story = {
  args: {
    title: "IoT-based Water Management",
    subtitle: "Smart Solutions for Sustainable Water Management",
    cta: "Invest Now",
    link: "https://wa.me/+96170097533?text=I want to invest with you",
  },
};
