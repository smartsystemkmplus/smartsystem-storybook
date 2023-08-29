import type { Meta, StoryObj } from "@storybook/react";
import { CustomNumberInput } from "./CustomNumberInput";

const meta = {
  title: "Example/CustomNumberInput",
  component: CustomNumberInput,
  parameters: {
    layout: "centered",
  },
  args: {
    min: 0,
    max: 100,
    label: "Label",
    description: "Description",
    placeholder: "Input number here...",
    rightSideText: "",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithControl: Story = {
  args: {
    hideControls: false,
  },
};

export const WithSideText: Story = {
  args: {
    hideControls: true,
    rightSideText: "%",
  },
};

export const WithControlAndSideText: Story = {
  args: {
    hideControls: false,
    rightSideText: "%",
  },
};
