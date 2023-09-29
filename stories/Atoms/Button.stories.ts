import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../components/atoms/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary",
    isSecondary: true,
  },
};

export const IsLoading: Story = {
  args: {
    title: "isLoading",
    isLoading: true,
  },
};

export const WithIcon: Story = {
  args: {
    title: "Save",
    icon: "💾",
  },
};

export const IsDisabled: Story = {
  args: {
    title: "Is disabled",
    isDisabled: true,
  },
};
