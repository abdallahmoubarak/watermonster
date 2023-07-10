import ProvidersList from "../components/molecules/ProvidersList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProvidersList> = {
  title: "ProvidersList",
  component: ProvidersList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProvidersList>;

export const Primary: Story = {
  args: {
    providers: [
      {
        name: "John Doe",
        image: "https://picsum.photos/300/300",
        locationName: "Location Name",
        userLocation: {
          latitude: 0,
          longitude: 0,
        },
        providerLocation: {
          latitude: 0,
          longitude: 0,
        },
        phone: "123-456-7890",
      },
      {
        name: "John Doe",
        image: "https://picsum.photos/300/300",
        locationName: "Location Name",
        userLocation: {
          latitude: 0,
          longitude: 0,
        },
        providerLocation: {
          latitude: 0,
          longitude: 0,
        },
        phone: "123-456-7890",
      },
    ],
  },
};
