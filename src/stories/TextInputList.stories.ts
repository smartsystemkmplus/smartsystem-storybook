import type { Meta, StoryObj } from "@storybook/react";
import { TextInputList } from "./TextInputList";

const meta = {
  title: "Example/TextInputList",
  component: TextInputList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInputList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    label: "Your Label",
    placeholder: "Your Placeholder",
    value: [],
  },
};

export const Filled: Story = {
  args: {
    label: "Your Label",
    placeholder: "Your Placeholder",
    value: ["Item 1", "Item 2"],
  },
};
