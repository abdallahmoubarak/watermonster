import type { Meta, StoryObj } from "@storybook/react";

import Input from "../../components/atoms/Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithoutValue: Story = {
  args: {
    placeholder: "Full Name",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Full Name",
    value: "Abdallah Moubarak",
  },
};

export const IsDisabled: Story = {
  args: {
    placeholder: "Email",
    isDisabled: true,
  },
};

export const IsDisabledWithValue: Story = {
  args: {
    placeholder: "Email",
    value: "xyz@gmail.com",
    isDisabled: true,
  },
};

export const Password: Story = {
  args: {
    placeholder: "Password",
    inputType: "password",
    value: "mypassword",
  },
};

export const PasswordWithoutValue: Story = {
  args: {
    placeholder: "Password",
    inputType: "password",
  },
};

export const InputFile: Story = {
  args: {
    placeholder: "Upload Image",
    inputType: "file",
  },
};
