import ProviderCard from "../components/atoms/ProviderCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProviderCard> = {
  title: "ProviderCard",
  component: ProviderCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProviderCard>;

export const Primary: Story = {
  args: {
    name: "John Doe",
    image: "https://picsum.photos/300/300",
    locationName: "123 Main St, Anytown, USA",
    phone: "123-456-7890",
  },
};
