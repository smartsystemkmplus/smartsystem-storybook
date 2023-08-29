import { Meta, StoryObj } from "@storybook/react";
import { NoItems } from "./NoItems";

const meta = {
  title: "Example/NoItems",
  component: NoItems,
  parameters: {
    layout: "centered",
  },
  args: {
    classNames: {
      icon: "",
      wrapper: "",
      label: "",
    },
  },
  argTypes: {
    label: {
      defaultValue: "No items",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NoItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "No items",
  },
};
