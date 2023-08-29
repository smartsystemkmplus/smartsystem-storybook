import type { Meta, StoryObj } from "@storybook/react";
import { SMEIcon } from "./SMEIcon";

const meta = {
  title: "Example/SMEIcon",
  component: SMEIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    size: 18,
  },
  argTypes: {
    size: {
      defaultValue: 18,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SMEIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
